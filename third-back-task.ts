class ThirdBackTask {
  static getResult(line: string) {
    let lineArray: string[] = line.split("");
    let lineSlice = line;
    let resultLine = "";
    if (line.length > 0 && line.length < 26) {
      for (let i = 0; i < lineArray.length; ) {
        if (lineArray[i + 1] === "{") {
          for (let j = i + 2; j < lineArray.length; j++) {
            if (lineArray[j] === "}") {
              resultLine += lineSlice.slice(i + 2, j).repeat(+lineArray[i]);
              i = j + 1;
            }
          }
        } else {
          resultLine += lineArray[i];
          i++;
        }
      }
    }
    return resultLine;
  }
}

//console.log(ThirdBackTask.getResult("3{54}31")); //"54545431" эти как орешки
//console.log(ThirdBackTask.getResult("2{4}3{23}")); //"44232323"
//console.log(ThirdBackTask.getResult("4{93{2}}")); //"9222922292229222" не повезло не фортануло

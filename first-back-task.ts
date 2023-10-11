class FirstBackTask {
  static getResult(actions: string[]) {
    const startArray: string[] = actions;
    let counter: number = 0;
    const successString: string = "scme";

    if (startArray.length > 3 && startArray.length < 50) {
      for (let i = 0; i < startArray.length; i++) {
        if (
          i + 3 < startArray.length &&
          startArray[i][0] +
            startArray[i + 1][0] +
            startArray[i + 2][0] +
            startArray[i + 3][0] ===
            successString
        ) {
          counter++;
        }
      }
    }
    return counter;
  }
}

// console.log(FirstBackTask.getResult(["start", "connect", "message", "end"])); //1
// console.log(
//   FirstBackTask.getResult([
//     "start",
//     "connect",
//     "message",
//     "end",
//     "start",
//     "connect",
//     "message",
//     "end",
//     "start",
//     "connect",
//     "message",
//   ])
// ); //2

// console.log(
//   FirstBackTask.getResult([
//     "start",
//     "connect",
//     "message",
//     "end",
//     "start",
//     "connect",
//     "message",
//     "end",
//     "start",
//     "connect",
//     "message",
//     "end",
//     "start",
//     "connect",
//     "message",
//     "message",
//     "end",
//     "start",
//     "connect",
//     "message",
//     "start",
//     "connect",
//     "message",
//     "end",
//     "start",
//     "connect",
//     "message",
//     "end",
//   ])
// ); //5

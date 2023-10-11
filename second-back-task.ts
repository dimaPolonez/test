class SecondBackTask {
  static getResult(a: number, b: number) {
    let result: number = 1;
    let modA: number = a % 10;
    let modB: number = b % 4;

    if (a && b > 1 && a && b < 1000000000) {
      if (modB === 0) {
        modB = 4;
      }

      for (let i = 0; i < modB; i++) {
        result = (result * modA) % 10;
      }
      return result;
    }
  }
}

// console.log(SecondBackTask.getResult(7, 3)); //3
// console.log(SecondBackTask.getResult(5, 123456789)); //5
// console.log(SecondBackTask.getResult(2, 10)); // 4
// console.log(SecondBackTask.getResult(9, 100)); // 1
// console.log(SecondBackTask.getResult(6, 2)); // 6
// console.log(SecondBackTask.getResult(3, 10)); // 9
// console.log(SecondBackTask.getResult(4, 12345)); // 4
// console.log(SecondBackTask.getResult(150, 53)); // 0

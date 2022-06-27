abstract class Logger {
  abstract log(message: string): void;

  printDate(date: Date) {
      this.log(date.toString())
  }
}

class RealLogger extends Logger {
  log(message: string): void {
      console.log(message)
  }

  logWithDate(message: string) {
      this.printDate(new Date())
      this.log(message)
  }
}
class GuessingGame {
  constructor() {
  }

  setRange(min, max) {
    //этот метод принимает минимальное и максимальное значение диапазона чисел для угадывания
    this.min = min;
    this.max = max;
  }

  guess() {
    //возвращает кандидата на решение
    this.res = Math.ceil((this.min + this.max) / 2);
    return this.res;
  }

  lower() {
    this.max = this.res;
  }

  greater() {
    this.min = this.res;
  }
}

module.exports = GuessingGame;

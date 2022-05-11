export class Lectura {
  predict: number;
  probabilities: number[];

  constructor(predict: number,probabilities: number[]){
      this.predict= predict;
      this.probabilities= probabilities;

  }
}

import { Injectable, OnInit } from '@angular/core';
import { genID } from "./gen-id.generator";

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {
  generator: Generator<number, void, unknown>;

  constructor() {
    this.generator = genID();
  }

  generate(n: number): string {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < n; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  getNewID() {
    return this.generator.next().value;
  }
}

import { Injectable } from '@angular/core';
import { Nature } from '../classes/nature';
import { NATURES } from '../classes/data-natures';

@Injectable()
export class NaturesService {

  constructor() { }

  getNatures(): Promise<Nature[]> {
    return Promise.resolve(NATURES);
  }

}

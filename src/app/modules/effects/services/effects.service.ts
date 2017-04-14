import { Injectable } from '@angular/core';
import { Effect } from '../classes/effect';
import { EFFECTS } from '../classes/data-effects';

@Injectable()
export class EffectsService {

  constructor() { }

  getEffects(): Promise<Effect[]> {
    return Promise.resolve(EFFECTS);
  }

}

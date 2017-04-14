import { Component, OnInit } from '@angular/core';
import { Effect } from '../../classes/effect';
import { EffectsService } from '../../services/effects.service';

@Component({
  selector: 'app-effects-list',
  templateUrl: './effects-list.component.html',
  styleUrls: ['./effects-list.component.css']
})
export class EffectsListComponent implements OnInit {

  effects: Effect[];
  effectsService: EffectsService;

  constructor(private _effectsService: EffectsService) {
    this.effectsService = _effectsService;    
  }

  getEffects(): void {
    this.effectsService.getEffects().then(effects => this.effects = effects);
  }

  ngOnInit() {
    this.getEffects();
  }

}

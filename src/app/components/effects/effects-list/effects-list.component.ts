import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pipe } from '@angular/core';

import { Effect } from '../../../models/effect';

import { EffectsService } from '../../../services/effects/effects.service';

@Component({
  selector: 'app-effects-list',
  templateUrl: './effects-list.component.html',
  styleUrls: ['./effects-list.component.css']
})
export class EffectsListComponent implements OnInit {

  effects: Effect[];
  effectsService: EffectsService;
  router: Router;
  
  constructor(private _effectsService: EffectsService, private _router: Router) {
    this.effectsService = _effectsService;    
    this.router = _router;
  }

  getEffects(): void {
    this.effectsService.getEffects()
        .subscribe(
          response => this.effects = response.sort((a: Effect, b: Effect) => { 
              if(a.name.toLowerCase() < b.name.toLowerCase()) {
                return -1;
              } else if( a.name.toLowerCase() > b.name.toLowerCase()) {
                return 1;
              } else {
                return 0;
              }
           }),
          error => console.log(error)
        );
  }

  ngOnInit() {
    this.getEffects();
  }

  onDeleteClick(effect: Effect): void {
    this.effectsService.removeEffect(effect)
        .subscribe(res => { this.getEffects(); });
  }

  onEditClick(effect: Effect): void {
    this.effectsService.effect = effect;
    this.router.navigate(['/effect/edit/'+ effect._id]);
  }

  onViewClick(effect: Effect): void {
    this.effectsService.effect = effect;
    this.router.navigate(['/effect/view/'+ effect._id]);    
  }

}

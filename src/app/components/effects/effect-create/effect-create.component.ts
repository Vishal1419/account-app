import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Effect } from '../../../models/effect';

import { EffectsService } from '../../../services/effects/effects.service';

@Component({
  selector: 'app-effect-create',
  templateUrl: './effect-create.component.html',
  styleUrls: ['./effect-create.component.css']
})
export class EffectCreateComponent implements OnInit {

  effectsService: EffectsService;
  router: Router;
  activatedRoute: ActivatedRoute;

  effect: Effect;
  behavior: string;
  resetButtonText: string;

  constructor(private _effectsService: EffectsService, private _router: Router, private _activatedRoute: ActivatedRoute) { 
    this.effectsService = _effectsService;
    this.router = _router;
    this.activatedRoute = _activatedRoute;
  }

  ngOnInit() {
    this.behavior = this.activatedRoute.snapshot.data[0]['behavior'];
    if(this.behavior == 'create') { 
      this.effect = new Effect(null, '', false);
      this.effect.isSystemGenerated = false;
      this.resetButtonText = 'Clear';
    } else if(this.behavior == 'edit' || this.behavior == 'view') {
      this.effect = this.effectsService.effect;
      if(this.behavior == 'edit') { this.resetButtonText = 'Cancel' }
      else { this.resetButtonText = 'OK' }
    }
  }

  onSaveClick(effect: Effect) {
    if(this.behavior == 'create') {
      console.log(effect);
      this.effectsService.addEffect(effect)
      .subscribe(
        response => {
          this.effect = new Effect(null, '', false);
          this.effect.isSystemGenerated = false;
        },
        error => console.log(error) 
      );
    } else if(this.behavior == 'edit') {
      this.effectsService.updateEffect(effect)
          .subscribe(
            response => this.router.navigate(['/effects']),
            error => console.log(error)
          );
    }
  }

  onCancelClick() {
    if(this.behavior == 'create') { 
      this.effect = new Effect(null, '', false);
      this.effect.isSystemGenerated = false;
    } else if(this.behavior == 'edit' || this.behavior == 'view') {
      this.effectsService.effect = null;
      this.router.navigate(['/effects']);
    }
  }

}

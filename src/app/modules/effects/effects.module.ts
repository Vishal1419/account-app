import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsRoutingModule } from './effects-routing.module';
import { EffectsListComponent } from './components/effects-list/effects-list.component';
import { EffectsService } from './services/effects.service';

@NgModule({
    imports: [CommonModule, EffectsRoutingModule],
    declarations: [EffectsListComponent],
    providers: [EffectsService]
})
export class EffectsModule { }
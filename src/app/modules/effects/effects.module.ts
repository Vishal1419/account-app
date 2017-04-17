import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { EffectsRoutingModule } from './effects-routing.module';
import { EffectsListComponent } from './components/effects-list/effects-list.component';
import { EffectsService } from './services/effects.service';
import { EffectCreateComponent } from './components/effect-create/effect-create.component';

@NgModule({
    imports: [
                CommonModule, FormsModule, HttpModule,
                EffectsRoutingModule
             ],
    declarations: [EffectsListComponent, EffectCreateComponent],
    providers: [EffectsService]
})
export class EffectsModule { }
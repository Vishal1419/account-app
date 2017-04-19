import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EffectsListComponent } from './components/effects/effects-list/effects-list.component';
import { EffectCreateComponent } from './components/effects/effect-create/effect-create.component';
import { NaturesListComponent } from './components/natures/natures-list/natures-list.component';
import { NatureCreateComponent } from './components/natures/nature-create/nature-create.component';
import { PageNotFoundComponent } from './components/page-not-found.component';

import { EffectsService } from './services/effects/effects.service';
import { NaturesService } from './services/natures/natures.service';

@NgModule({
  declarations: [
    AppComponent,
    EffectsListComponent,
    EffectCreateComponent,
    NaturesListComponent,
    NatureCreateComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    EffectsService,
    NaturesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

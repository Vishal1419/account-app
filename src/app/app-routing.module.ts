import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EffectsListComponent } from './components/effects/effects-list/effects-list.component';
import { EffectCreateComponent } from './components/effects/effect-create/effect-create.component';
import { NaturesListComponent } from './components/natures/natures-list/natures-list.component';
import { NatureCreateComponent } from './components/natures/nature-create/nature-create.component';

import { PageNotFoundComponent } from './components/page-not-found.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/effects', pathMatch: 'full' },
    { path: 'effects', component: EffectsListComponent },
    { path: 'effect/create', component: EffectCreateComponent, data:[{behavior: 'create'}] },
    { path: 'effect/edit/:id', component: EffectCreateComponent, data:[{behavior: 'edit'}] },
    { path: 'effect/view/:id', component: EffectCreateComponent, data:[{behavior: 'view'}] },
    { path: 'natures', component: NaturesListComponent },
    { path: 'nature/create', component: NatureCreateComponent, data:[{behavior: 'create'}] },
    { path: 'nature/edit/:id', component: NatureCreateComponent, data:[{behavior: 'edit'}] },
    { path: 'nature/view/:id', component: NatureCreateComponent, data:[{behavior: 'view'}] },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
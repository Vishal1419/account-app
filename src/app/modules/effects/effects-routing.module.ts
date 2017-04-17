import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EffectsListComponent } from './components/effects-list/effects-list.component';
import { EffectCreateComponent } from './components/effect-create/effect-create.component';

const effectsRoutes: Routes = [
    { path: 'effects', component: EffectsListComponent },
    { path: 'effect/create', component: EffectCreateComponent, data:[{behavior: 'create'}] },
    { path: 'effect/edit/:id', component: EffectCreateComponent, data:[{behavior: 'edit'}] },
    { path: 'effect/view/:id', component: EffectCreateComponent, data:[{behavior: 'view'}] }
];

@NgModule({
    imports: [
        RouterModule.forChild(effectsRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class EffectsRoutingModule { }
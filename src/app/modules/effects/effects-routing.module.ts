import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EffectsListComponent } from './components/effects-list/effects-list.component';

const effectsRoutes: Routes = [
    { path: 'effects', component: EffectsListComponent }
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
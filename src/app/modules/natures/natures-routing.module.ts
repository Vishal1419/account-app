import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NaturesListComponent } from './components/natures-list/natures-list.component';

const naturesRoutes: Routes = [
    { path: 'natures', component: NaturesListComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(naturesRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class NaturesRoutingModule { }
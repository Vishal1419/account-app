import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NaturesListComponent } from './components/natures-list/natures-list.component';
import { NatureCreateComponent } from './components/nature-create/nature-create.component';

const naturesRoutes: Routes = [
    { path: 'natures', component: NaturesListComponent },
    { path: 'nature/create', component: NatureCreateComponent, data:[{behavior: 'create'}] },
    { path: 'nature/edit/:id', component: NatureCreateComponent, data:[{behavior: 'edit'}] },
    { path: 'nature/view/:id', component: NatureCreateComponent, data:[{behavior: 'view'}] }
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
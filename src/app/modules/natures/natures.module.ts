import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NaturesRoutingModule } from './natures-routing.module';
import { NaturesListComponent } from './components/natures-list/natures-list.component';
import { NaturesService } from './services/natures.service';
import { NatureCreateComponent } from './components/nature-create/nature-create.component';

@NgModule({
    imports: [
                CommonModule, FormsModule, HttpModule,
                NaturesRoutingModule
             ],
    declarations: [NaturesListComponent, NatureCreateComponent],
    providers: [NaturesService]
})
export class NaturesModule { }
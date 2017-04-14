import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NaturesRoutingModule } from './natures-routing.module';
import { NaturesListComponent } from './components/natures-list/natures-list.component';
import { NaturesService } from './services/natures.service';

@NgModule({
    imports: [CommonModule, NaturesRoutingModule],
    declarations: [NaturesListComponent],
    providers: [NaturesService]
})
export class NaturesModule { }
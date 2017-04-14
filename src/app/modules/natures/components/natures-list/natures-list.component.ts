import { Component, OnInit } from '@angular/core';
import { Nature } from '../../classes/nature';
import { NaturesService } from '../../services/natures.service';

@Component({
  selector: 'app-natures-list',
  templateUrl: './natures-list.component.html',
  styleUrls: ['./natures-list.component.css']
})
export class NaturesListComponent implements OnInit {

  natures: Nature[];
  naturesService: NaturesService;

  constructor(private _naturesService: NaturesService) { 
    this.naturesService = _naturesService;
  }

  getNatures(): void {
    this.naturesService.getNatures().then(natures => this.natures = natures);
  }

  ngOnInit() {
    this.getNatures();
  }

}

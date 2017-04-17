import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Nature } from '../../classes/nature';
import { NaturesService } from '../../services/natures.service';

@Component({
  selector: 'app-nature-create',
  templateUrl: './nature-create.component.html',
  styleUrls: ['./nature-create.component.css']
})
export class NatureCreateComponent implements OnInit {

  naturesService: NaturesService;
  router: Router;
  activatedRoute: ActivatedRoute;

  nature: Nature;
  behavior: string;
  resetButtonText: string;

  constructor(private _naturesService: NaturesService, private _router: Router, private _activatedRoute: ActivatedRoute) { 
    this.naturesService = _naturesService;
    this.router = _router;
    this.activatedRoute = _activatedRoute;
  }

  ngOnInit() {
    this.behavior = this.activatedRoute.snapshot.data[0]['behavior'];
    if(this.behavior == 'create') { 
      this.nature = new Nature(null, '', false);
      this.nature.isSystemGenerated = false;
      this.resetButtonText = 'Clear';
    } else if(this.behavior == 'edit' || this.behavior == 'view') {
      this.nature = this.naturesService.nature;
      if(this.behavior == 'edit') { this.resetButtonText = 'Cancel' }
      else { this.resetButtonText = 'OK' }
    }
  }

  onSaveClick(nature: Nature) {
    if(this.behavior == 'create') {
      console.log(nature);
      this.naturesService.addNature(nature)
      .subscribe(
        response => {
          this.nature = new Nature(null, '', false);
          this.nature.isSystemGenerated = false;
        },
        error => console.log(error) 
      );
    } else if(this.behavior == 'edit') {
      this.naturesService.updateNature(nature)
          .subscribe(
            response => this.router.navigate(['/natures']),
            error => console.log(error)
          );
    }
  }

  onCancelClick() {
    if(this.behavior == 'create') { 
      this.nature = new Nature(null, '', false);
      this.nature.isSystemGenerated = false;
    } else if(this.behavior == 'edit' || this.behavior == 'view') {
      this.naturesService.nature = null;
      this.router.navigate(['/natures']);
    }
  }

}

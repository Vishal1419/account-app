import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pipe } from '@angular/core';
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
  router: Router;
  
  constructor(private _naturesService: NaturesService, private _router: Router) {
    this.naturesService = _naturesService;    
    this.router = _router;
  }

  getNatures(): void {
    this.naturesService.getNatures()
        .subscribe(
          response => this.natures = response.sort((a: Nature, b: Nature) => { 
              if(a.name.toLowerCase() < b.name.toLowerCase()) {
                return -1;
              } else if( a.name.toLowerCase() > b.name.toLowerCase()) {
                return 1;
              } else {
                return 0;
              }
           }),
          error => console.log(error)
        );
  }

  ngOnInit() {
    this.getNatures();
  }

  onDeleteClick(nature: Nature): void {
    this.naturesService.removeNature(nature)
        .subscribe(res => { this.getNatures(); });
  }

  onEditClick(nature: Nature): void {
    this.naturesService.nature = nature;
    this.router.navigate(['/nature/edit/'+ nature._id]);
  }

  onViewClick(nature: Nature): void {
    this.naturesService.nature = nature;
    this.router.navigate(['/nature/view/'+ nature._id]);    
  }

}

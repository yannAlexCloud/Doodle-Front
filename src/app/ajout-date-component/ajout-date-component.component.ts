import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {Sondage} from '../sondage';
import {Dates} from '../dates';
import {DoodleServiceService} from '../doodle-service.service';
import {IntermediaireServiceService} from '../intermediaire-service.service';

@Component({
  selector: 'app-ajout-date-component',
  templateUrl: './ajout-date-component.component.html',
  styleUrls: ['./ajout-date-component.component.css']
})
export class AjoutDateComponentComponent implements OnInit {
    subscription: Subscription;
    date: Dates
  sondage: Sondage = new Sondage();
  constructor(private service:DoodleServiceService, private intermediaire:IntermediaireServiceService) {
      this.subscription = this.intermediaire.getObservable().subscribe(sondage => { this.sondage = this.intermediaire.getSondage(); });
  }

  ngOnInit() {

  }

  AjoutDate(){

  }

}

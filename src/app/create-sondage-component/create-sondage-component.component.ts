import { Component, OnInit } from '@angular/core';
import {IntermediaireServiceService} from '../intermediaire-service.service';
import {Utilisateur} from '../utilisateur';
import {Sondage} from '../sondage';
import {DoodleServiceService} from '../doodle-service.service';
import {Preference} from '../preference';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-create-sondage-component',
  templateUrl: './create-sondage-component.component.html',
  styleUrls: ['./create-sondage-component.component.css']
})
export class CreateSondageComponentComponent implements OnInit {
  sondage: Sondage = new Sondage();
  user: Utilisateur = new Utilisateur();
  typeSondage = '';
  allergie = '';
  subscription: Subscription;
  constructor(private service: DoodleServiceService, private intermediaire: IntermediaireServiceService) { }
  ngOnInit() {
    this.subscription = this.intermediaire.getObservable().subscribe(user => { this.user = this.intermediaire.getUser(); });
  }

    createSondage() {
        this.service.addSondage(this.sondage, this.user.id)
            .subscribe();
    }
  addPreference(){
    let preference: Preference= new Preference();
    preference.allergie = this.allergie;
    this.sondage.preferences.push(preference);
    this.allergie = '';
  }
}

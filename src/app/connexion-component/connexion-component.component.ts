import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {DoodleServiceService} from '../doodle-service.service';
import {Utilisateur} from '../utilisateur';
import {IntermediaireServiceService} from '../intermediaire-service.service';

@Component({
  selector: 'app-connexion-component',
  templateUrl: './connexion-component.component.html',
  styleUrls: ['./connexion-component.component.css']
})
export class ConnexionComponentComponent implements OnInit {
  utilisateur: Utilisateur = new Utilisateur();
  link: string;
  userRecup: Utilisateur = new Utilisateur();
  usersRecup: Utilisateur[] =[];
  constructor(private service: DoodleServiceService, private intermediare: IntermediaireServiceService) { }

  ngOnInit() {
  }

    email = new FormControl('', [Validators.required, Validators.email]);

    getErrorMessage() {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' :
                '';
    }
    connect(){
      this.service.connect(this.utilisateur)
            .subscribe(user =>{
              this.intermediare.setUser(user);
            }
            );
    }
}
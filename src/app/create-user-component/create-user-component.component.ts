import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Utilisateur} from '../utilisateur';
import {DoodleServiceService} from '../doodle-service.service';
import {IntermediaireServiceService} from '../intermediaire-service.service';
@Component({
  selector: 'app-create-user-component',
  templateUrl: './create-user-component.component.html',
  styleUrls: ['./create-user-component.component.css']
})
export class CreateUserComponentComponent implements OnInit {
  constructor(private service: DoodleServiceService, private intermediaire: IntermediaireServiceService) { }
  password1 = '';
  password2 = '';
  link: string;
  dispo = true;
  utilisateur: Utilisateur = new Utilisateur();
    email = new FormControl('', [Validators.required, Validators.email]);

  ngOnInit() {
  }

    getErrorMessage() {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' :
                '';
    }

    verifyPassword(): boolean {
        if (this.utilisateur.nom !== '' && this.utilisateur.email !== '' && this.password1 !== '' && this.password2 !== '' && this.password1 === this.password2) {
        this.utilisateur.password = this.password1;
        this.link = '/create';
        this.dispo = false;
      }
        return this.dispo;
    }
    createUser() {
      this.service.addUser(this.utilisateur)
            .subscribe(user => this.intermediaire.setUser(user));
    }

}

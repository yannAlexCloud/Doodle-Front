import { Injectable } from '@angular/core';
import { Observable, Observer, Subject } from 'rxjs';
import {Utilisateur} from './utilisateur';
import {Sondage} from './sondage';

@Injectable()
export class IntermediaireServiceService {
    constructor() { }
    user: Utilisateur = new Utilisateur();
    sondage: Sondage = new Sondage();
    private subject = new Subject<any>();
    setUser(user: Utilisateur) {
        this.user = user;
        this.subject.next(user);
    }
    getObservable(): Observable<any> {
        return this.subject.asObservable();
    }

    getUser(): Utilisateur{
        return this.user;
    }
    setSondage(sondage: Sondage) {
        this.sondage = sondage;
        this.subject.next(sondage);
    }
    getSondage(): Sondage{
        return this.sondage;
    }
}

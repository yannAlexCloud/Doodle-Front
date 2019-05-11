import {JsonObject, JsonProperty} from 'json2typescript';

@JsonObject('Utilisateur')
export class Utilisateur {
    id: number;
    @JsonProperty('email', String)
    email: string;
    @JsonProperty('password', String)
    password: string;
    @JsonProperty('nom', String)
    nom: string;
    constructor() {
        this.email = '';
        this.password = '';
        this.nom = '';
    }

    getId(): number {
        return this.id;
    }
    getEmail(): string {
        return this.email;
    }
    getPassword(): string {
        return this.password;
    }
    getNom(): string {
        return this.nom;
    }
}

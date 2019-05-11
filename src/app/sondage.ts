import {JsonObject, JsonProperty} from 'json2typescript';
import {Preference} from './preference';
@JsonObject('Sondage')
export class Sondage {

    id: number;
    @JsonProperty('intitule', String)
    intitule: string;
    @JsonProperty('resume', String)
    resume: string;
    @JsonProperty('code', String)
    code: string;
    constructor() {
        this.intitule = '';
        this.resume = '';
        this.code = '';
        this.type = '';
    }
    @ JsonProperty ( 'preferences' , [ Preference ] )
    preferences: Preference[] = [];

    @JsonProperty('type', String)
    type: string;

    getId(): number {
        return this.id;
    }
    getIntitule(): string {
        return this.intitule;
    }
    getResume(): string {
        return this.resume;
    }
    getcode(): string {
        return this.code;
    }
}

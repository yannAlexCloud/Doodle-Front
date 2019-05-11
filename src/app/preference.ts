import {JsonObject, JsonProperty} from 'json2typescript';
@JsonObject('Preference')
export class Preference {
    id: number;
    @JsonProperty('allergie', String)
    allergie: string;
    constructor() {
        this.allergie = '';
    }

    getId(): number {
        return this.id;
    }
    getallergie(): string {
        return this.allergie;
    }
}

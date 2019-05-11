import {JsonProperty} from 'json2typescript';

export class Lieu {
    id: number;
    @JsonProperty('lieu', String)
    leiu: string;
    @JsonProperty('pause', Boolean)
    pause: boolean;
}

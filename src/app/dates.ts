import {JsonObject, JsonProperty} from 'json2typescript';
@JsonObject('Dates')
export class Dates {
    id: number;
    @JsonProperty('date', Date)
    date: Date;
    @JsonProperty('pause', Boolean)
    pause: boolean;
}

import { Injectable } from "@angular/core";

@Injectable ({
    providedIn: 'root'
})

export class GlobalServices {

    constructor(){ }

    public static BaseURL = 'http://localhost:3000'

}
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { GlobalServices } from "./global-services";

@Injectable ({
    providedIn: 'root'
})

export class ShoppingAppServices {

    constructor( private http: HttpClient ){ }


    registerUser(data: any, option: any){
        const url = `${GlobalServices.BaseURL}/auth/registeruser`
        return this.http.post(url, data, option);
    }


    loginUser(data: any, option: any){
        const url = `${GlobalServices.BaseURL}/auth/loginuser`
        return this.http.post(url, data, option);
    }


    sendMessage(data: any, option: any){
        const url = `${GlobalServices.BaseURL}/chat/sendmessage`
        return this.http.post(url, data, option);
    }

    getAllMessages(userId: string){
        const url = `${GlobalServices.BaseURL}/chat/get-all-messages/${userId}`
        return this.http.get(url);
    }

}
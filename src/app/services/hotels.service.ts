import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { hotelModel } from "../Models/hotelModel";
@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  Url = "https://api.myjson.com/bins/tl0bp";

  constructor(private http: HttpClient) { }

  GetAllHotels() {
    //debugger;  
    return this.http.get<hotelModel[]>(this.Url);
  }



}

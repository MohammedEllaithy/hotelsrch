import { Component, OnInit } from '@angular/core';
import { HotelsService } from "../../services/hotels.service";
import { hotelModel } from "../../Models/hotelModel";
import { OrderPipe } from 'ngx-order-pipe';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  order: string = 'h.name';
  reverse: boolean = false;
  hot: hotelModel[] = [];
  sortedCollection: any[];
  selectedprices: any[];

  constructor(private orderPipe: OrderPipe, private hotser: HotelsService) {
    this.sortedCollection = orderPipe.transform(this.hot, 'h.name');
    console.log(this.sortedCollection);
  }


  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }

    // Load all Hotels

  LoadHotels() {
    // debugger;  

    this.hotser.GetAllHotels().subscribe(
      data => { this.hot = data, console.log(this.hot) }

    );
    //console.log(this.hot)

  }



  ngOnInit() {
    this.LoadHotels();
    // console.log(this.LoadHotels())
  }

}

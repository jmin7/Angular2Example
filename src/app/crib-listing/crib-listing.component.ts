import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { CribsService } from './../services/cribs.service';
import { UtilService } from './../services/util.service';

@Component({
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css']
})
export class CribListingComponent implements OnInit {

  cribs: Array<any>;
  error: string;
  sortField: string = 'price';
  sortDirection: string = 'asc';  
  // default sorting filed is price and sorting direction is asc
  sortFields: Array<string> = [
    'address',
    'area',
    'bathrooms',
    'bedrooms',
    'price',
    'type'
    ];

  constructor(
    private http: Http,
    private cribsService: CribsService,
    private utilService: UtilService

    ) {  } // can inject somthing in the curly bracket

  ngOnInit() {
    // this.http.get('data/cribs.json')     // put http address in between ' '
    // .map(res => res.json())
    // .subscribe(
    //   data => this.cribs = data,
    //   error => this.error = error.statusText
    // );
    // this is done in cribs.service.ts file

    this.cribsService.getAllCribs()
      .subscribe(
        data => this.cribs = data,
        error => this.error = error.statusText
    );

    this.cribsService.newCribSubject.subscribe(
      data => this.cribs = [data, ...this.cribs]
    )
  }

}

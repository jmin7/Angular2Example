import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { CribsService } from './../services/cribs.service';

@Component({
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css']
})
export class CribListingComponent implements OnInit {

  cribs: Array<any>;
  error: string;

  constructor(
    private http: Http,
    private cribsService: CribsService
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
      data => this.cribs.push(data)
    )
  }

}

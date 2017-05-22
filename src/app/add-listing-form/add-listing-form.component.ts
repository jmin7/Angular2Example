import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CribsService } from './../services/cribs.service';

@Component({
  selector: 'app-add-listing-form',
  templateUrl: './add-listing-form.component.html',
  styleUrls: ['./add-listing-form.component.css']
})
export class AddListingFormComponent implements OnInit {

  propertyTypes: Array<string> = ['House', 'Condo', 'Duplex'];
  constructor(public cribsService: CribsService) { }

  ngOnInit() {
  }

  onCribSubmit(data): void {
    this.cribsService.addCrib(data);
  }
}

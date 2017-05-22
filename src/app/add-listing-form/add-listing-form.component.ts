import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CribsService } from './../services/cribs.service';
import { UtilService } from './../services/util.service';


@Component({
  selector: 'app-add-listing-form',
  templateUrl: './add-listing-form.component.html',
  styleUrls: ['./add-listing-form.component.css']
})
export class AddListingFormComponent implements OnInit {

  @ViewChild('newCribForm') newCribForm;

  propertyTypes: Array<string> = ['House', 'Condo', 'Duplex'];
  constructor(
    public cribsService: CribsService,
    public utilService: UtilService
    ) { }

  ngOnInit() {
  }

  onCribSubmit(data): void {
    this.cribsService.addCrib(data);
    this.newCribForm.reset();
  }
}

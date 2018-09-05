import { Component, OnInit, ViewEncapsulation, ViewChild } from "@angular/core";
import { FormComponent } from "../components/form/form.component";

@Component({
  selector: "ins-note",
  templateUrl: "./note.component.html",
  styleUrls: ["./note.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class NoteComponent implements OnInit {
  constructor() {}
  isMxHeight: boolean;
  formOpts: Array<any>;
  formInvestment: Array<any>;
  formIndex: number;

  // @ViewChild(FormComponent)
  // fcm: FormComponent;

  ngOnInit() {
    this.isMxHeight = false;
    this.formOpts = [
      {
        title: "Name",
        placeholderText: "Name",
        ctrName: "name"
      },
      {
        title: "Age",
        placeholderText: "Age",
        ctrName: "age"
      },
      {
        title: "Address",
        placeholderText: "Address",
        ctrName: "address"
      }
    ];
    this.formInvestment = [
      {
        title: "Name",
        placeholderText: "Name",
        ctrName: "name"
      },
      {
        title: "Investment",
        placeholderText: "Investment",
        ctrName: "investment"
      },
      {
        title: "Location",
        placeholderText: "Location",
        ctrName: "location"
      },
      {
        title: "Country",
        placeholderText: "Country",
        ctrName: "country"
      },
      {
        title: "State",
        placeholderText: "State",
        ctrName: "state"
      }
    ];
  }
  smfn(tabev: any): void {
    // console.log(tabev);
    this.formIndex = tabev.index;
    tabev.index === 0 ? (this.isMxHeight = true) : (this.isMxHeight = false);
  }
  submitForm(): void {
    // console.log(this.fcm);
    // this.fcm.formSub();
    // if(this.formIndex == 0) {
    // } else if(this.formIndex == 1) {
    // } else {
    // }
  }
}

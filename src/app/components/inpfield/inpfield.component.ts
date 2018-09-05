import { Component, OnInit, ViewEncapsulation, Input } from "@angular/core";

@Component({
  selector: "ins-inpfield",
  templateUrl: "./inpfield.component.html",
  styleUrls: ["./inpfield.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class InpfieldComponent implements OnInit {
  @Input()
  grpName: any;

  @Input()
  inFieldData: Object;

  constructor() {}

  ngOnInit() {}
}

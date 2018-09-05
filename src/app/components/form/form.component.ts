import { Component, OnInit, ViewEncapsulation, Input } from "@angular/core";
import { InpfieldComponent } from "../inpfield/inpfield.component";
import {
  FormBuilder,
  FormGroup,
  FormControlName,
  Validators,
  FormControl
} from "@angular/forms";

@Component({
  selector: "ins-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class FormComponent implements OnInit {
  @Input()
  formFields: Array<any>;

  // @Input()
  // formGrpName: FormGroup;

  insFormGrp: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  createFormControllerHandler() {
    this.formFields.forEach((itm, i) => {
      this.insFormGrp.addControl(
        itm.ctrName,
        new FormControl("", Validators.required)
      );
    });
  }

  ngOnInit() {
    this.insFormGrp = this._formBuilder.group({});
    this.createFormControllerHandler();
  }

  onFormSubmit(): void {
    console.log(this.insFormGrp.value);
  }
  formSub() {
    console.log("call from parent", this);
    this.onFormSubmit();
  }

  trackByLengthFn(index, itm): void {
    return index;
  }
}

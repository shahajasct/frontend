import { Component, OnInit } from "@angular/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ApiService } from "../services/api.service";

interface Type {
  value: string;
  viewValue: string;
}
@Component({
  selector: "app-live",
  templateUrl: "./live.component.html",
  styleUrls: ["./live.component.css"],
})
export class LiveComponent implements OnInit {
  minDate = new Date();
  maxDate = new Date(2023, 3, 10);
  productForm!: FormGroup;
  productdata!: any;
  today: number = Date.now();

  type: Type[] = [
    { value: "paid", viewValue: "Paid" },
    { value: "loss_of_pay", viewValue: "Loss of pay" },
    { value: "compensatory", viewValue: "compensatory" },
  ];

  constructor(private api: ApiService, private formbuilder: FormBuilder) {}

  ngOnInit(): void {
    // this.allproducts();

    this.productForm = this.formbuilder.group({
      num: ["", Validators.required],
      sd: ["", Validators.required],
      ed: ["", Validators.required],
      rs: ["", Validators.required],
      type: ["", Validators.required],
      status: ["", Validators.required],
    });
  }
  addproducts() {
    // console.log(this.productForm.value)
    // debugger
    if (this.productForm.valid) {
      this.api.postproduct(this.productForm.value).subscribe({
        next: (res) => {
          alert("Added Successfully");

          this.productForm.reset();

          // this.allproducts();
          
        },
        error: () => {
          alert("Error while adding");
        },
      });
    }
  }
  // allproducts() {
  //   this.api.getproduct().subscribe({
  //     next: (res) => {
  //       this.productdata = res;
  //     },
  //     error: (err) => {
  //       alert("Error while fetching!");
  //     },
  //   });
  // }
}

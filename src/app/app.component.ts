import { Component, OnInit, VERSION } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  // favouriteColor: string;
  // favouriteNumber: number;
  // firstName = new FormControl();
  // lastName = new FormControl();

  profileForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl(''),
  });

  ngOnInit(): void {
    // this.favouriteColor = "green";
    // this.favouriteNumber = 420;

    // this.firstName.setValue("first")
    // this.lastName.setValue("last")

    // this.profileForm.setValue({
    //   firstName: "Carlo",
    //   lastName: "Chuan"
    // })
    // treba vsetky polia pri patch netreba

    this.profileForm.patchValue({
      firstName: 'Leonardo',
    });
  }

  onSubmit(): void {
    console.log(
      'value: ' +
        this.profileForm.value.firstName +
        ' ' +
        this.profileForm.value.lastName
    );
  }

  

  validate(): boolean {
    // return this.favouriteColor.includes("z");
    return true;
  }
}

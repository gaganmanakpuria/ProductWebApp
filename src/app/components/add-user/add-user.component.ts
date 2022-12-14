import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductAppService } from 'src/app/Services/product-app.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  repeatPass: string = 'none';
  users: [] = [];

  uservalid: any = true;

  username: string = '';

  arrayUsername: string[] = [];

  constructor(
    private productAppService: ProductAppService,
    private router: Router,
    private toastr: ToastrService
  ) {}
  addUserForm = new FormGroup({
    fullName: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z]*[ ]*[a-zA-Z]*'),
    ]),
    userName: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z].*'),
      this.chkuserValidator.bind(this),
    ]),
    address: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    role: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(15),
    ]),
    repeatPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(15),
    ]),
  });

  ngOnInit(): void {
    this.productAppService
      .getAllUsers()

      .subscribe({
        next: (user) => {
          this.users = user;

          this.arrayUsername = user.map((x: any) => x.userName.toLowerCase());
        },

        error: (response) => {
          console.log(response);
        },
      });
  }

  addUserSubmitted() {
    if (this.Password.value == this.RepeatPassword.value) {
      this.repeatPass = 'none';
      this.productAppService
        .addUser({
          name: this.addUserForm.value.fullName,
          userName: this.addUserForm.value.userName,
          address: this.addUserForm.value.address,
          city: this.addUserForm.value.city,
          role: this.addUserForm.value.role,
          password: this.addUserForm.value.password,
        })
        .subscribe((res) => {
          this.toastr.success('User Added Successfully', '', {
            positionClass: 'toast-top-right',
          });
          this.router.navigate(['/users']);
        });
    } else {
      this.repeatPass = 'Inline';
    }
  }

  chkuserValidator(control: FormControl) {
    if (this.arrayUsername.indexOf(control.value.toLowerCase()) !== -1) {
      return { nameIsNotAllowed: true };
    }
    return null;
  }

  get FullName(): FormControl {
    return this.addUserForm.get('fullName') as FormControl;
  }
  get UserName(): FormControl {
    return this.addUserForm.get('userName') as FormControl;
  }
  get Address(): FormControl {
    return this.addUserForm.get('address') as FormControl;
  }
  get City(): FormControl {
    return this.addUserForm.get('city') as FormControl;
  }
  get Role(): FormControl {
    return this.addUserForm.get('role') as FormControl;
  }
  get Password(): FormControl {
    return this.addUserForm.get('password') as FormControl;
  }
  get RepeatPassword(): FormControl {
    return this.addUserForm.get('repeatPassword') as FormControl;
  }
}

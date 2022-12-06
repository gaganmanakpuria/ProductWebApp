import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastrModule } from 'ngx-toastr';
import { ToastrService } from 'ngx-toastr/toastr/toastr.service';

import { AddUserComponent } from './add-user.component';

describe('AddUserComponent', () => {
  let component: AddUserComponent;
  let fixture: ComponentFixture<AddUserComponent>;
  let httpMock: HttpTestingController
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUserComponent ],
      imports:[
        HttpClientTestingModule,
        ToastrModule.forRoot()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('form should be invalid' , ()=>{
    component.addUserForm.controls['fullName'].setValue('');
    component.addUserForm.controls['userName'].setValue('');
    component.addUserForm.controls['address'].setValue('');
    component.addUserForm.controls['city'].setValue('');
    component.addUserForm.controls['role'].setValue('');
    component.addUserForm.controls['password'].setValue('');
    component.addUserForm.controls['repeatPassword'].setValue('');
    expect(component.addUserForm.valid).toBeFalsy();
  });
  it('form should be valid' , ()=>{
    component.addUserForm.controls['fullName'].setValue('Gagandeep');
    component.addUserForm.controls['userName'].setValue('Gagan');
    component.addUserForm.controls['address'].setValue('Patiala');
    component.addUserForm.controls['city'].setValue('Patiala');
    component.addUserForm.controls['role'].setValue('User');
    component.addUserForm.controls['password'].setValue('Singhaaa');
    component.addUserForm.controls['repeatPassword'].setValue('Singhaaa');
    expect(component.addUserForm.valid).toBeTruthy();
  });
  it('should submit form', ()=>{

    component.addUserSubmitted();

    expect(component.addUserForm).toBeTruthy();

  });



  it('should call onsubmit method', ()=>{

    spyOn(component,'addUserSubmitted');

    expect(component.addUserSubmitted).toBeTruthy();

  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

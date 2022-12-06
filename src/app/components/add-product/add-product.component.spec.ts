import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastrModule } from 'ngx-toastr';

import { AddProductComponent } from './add-product.component';

describe('AddProductComponent', () => {
  let component: AddProductComponent;
  let fixture: ComponentFixture<AddProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProductComponent ],imports:[
        HttpClientTestingModule,
        ToastrModule.forRoot()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('form should be invalid' , ()=>{

    component.addProductForm.controls['name'].setValue('');

    component.addProductForm.controls['price'].setValue('');

    component.addProductForm.controls['quantity'].setValue('');

   

    expect(component.addProductForm.valid).toBeFalsy();

  });
  it('form should be valid' , ()=>{

    component.addProductForm.controls['name'].setValue('Mobile');

    component.addProductForm.controls['price'].setValue('11');

    component.addProductForm.controls['quantity'].setValue('2');


    expect(component.addProductForm.valid).toBeTruthy();

  });
  it('should submit form', ()=>{

    component.addProductSubmitted();

    expect(component.addProductForm).toBeTruthy();

  });



  it('should call onsubmit method', ()=>{

    spyOn(component,'addProductSubmitted');

    expect(component.addProductSubmitted).toBeTruthy();

  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

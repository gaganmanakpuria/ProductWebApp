import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';
import { of } from 'rxjs';
import { ProductsComponent } from './products.component';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let products: any[];

  let mockProductAppService: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsComponent ],
      imports:[
        HttpClientTestingModule,
        NgxPaginationModule ,
        ToastrModule.forRoot()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    products = [

      { id:1, name: 'mobile', quantity: '1', price: '123', status: 'Pending' },{ id:2, name: 'Washing Machine', quantity: '2', price: '1222', status: 'Approved' },     

    ]



    mockProductAppService = jasmine.createSpyObj(['deleteProduct']);
  });
  it('should remove the product with id 2', () => {

    // Arrange

    mockProductAppService.deleteProduct.and.returnValue(of(true));

    component.allProducts = products;

    // Act

    component.deleteProduct(products[1]);

    // Assert

    expect(component.allProducts).toBeTruthy();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

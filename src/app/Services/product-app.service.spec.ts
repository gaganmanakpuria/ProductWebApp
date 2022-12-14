import { TestBed } from '@angular/core/testing';
import {  HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import { ProductAppService } from './product-app.service';

describe('ProductAppService', () => {
  let service: ProductAppService;
  let httpMock: HttpTestingController
  // let API_URL="https://localhost:44376/api/Users";
  //let API_URL="https://localhost:8080/api/Users";
 let API_URL="https://localhost:85/api/Users";

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(ProductAppService);
    httpMock= TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should return a user result',()=>{
    service.getAllUsers().subscribe(result=>{
      expect(result).toBeTruthy();
      expect(result.results).toBeTruthy();
      expect(result.results.length).toEqual(1);
      console.log('result verified')
    });
    const req = httpMock.expectOne(API_URL);
    expect(req.request.method).toBe('GET');
    req.flush({
      results:[
        {
          id:1,
          name:"gagan",
          useName:"Gsingh",
          address:"Mohali",
          city:"mohali",
          role:"Admin"

        }
      ]
    })
  })
});

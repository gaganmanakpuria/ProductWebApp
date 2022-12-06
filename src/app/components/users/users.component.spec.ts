import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, flushMicrotasks, TestBed, tick } from '@angular/core/testing';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';
import { of } from 'rxjs';
import { ProductAppService } from 'src/app/Services/product-app.service';

import { UsersComponent } from './users.component';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let users: any[];

  let mockUserAppService: any;
  beforeEach(async () => {
  
    await TestBed.configureTestingModule({
      declarations: [ UsersComponent ],
      imports:[
        HttpClientTestingModule
        ,NgxPaginationModule ,ToastrModule.forRoot()      ],
 
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    users = [

      { id: 1, name: "mohit", username: "abcteree", password: "whqihd", role: "Admin" ,adress:"patiala",city:"patiala"},

      { id: 2, name: "mohit", username: "user", password: "user", role: "User" ,adress:"patiala",city:"patiala"}

    ]



    mockUserAppService = jasmine.createSpyObj(['deleteUser']);
  });
  
  it('should remove the user with id 2', () => {

    // Arrange

    mockUserAppService.deleteUser.and.returnValue(of(true));

    component.allUsers = users;

    // Act

    component.deleteUser(users[1]);

    // Assert

    expect(component.allUsers).toBeTruthy();

  });

  it('should create', () => {
    
    expect(component).toBeTruthy();
  });
});

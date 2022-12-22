import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipe } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchPipe } from 'src/app/search.pipe';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent,SearchPipe ],
      imports:[
        HttpClientTestingModule ,NgxPaginationModule,Ng2OrderModule
      ]

    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

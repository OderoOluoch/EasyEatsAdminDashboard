import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuisinesDetailComponent } from './cuisines-detail.component';

describe('CuisinesDetailComponent', () => {
  let component: CuisinesDetailComponent;
  let fixture: ComponentFixture<CuisinesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuisinesDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuisinesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

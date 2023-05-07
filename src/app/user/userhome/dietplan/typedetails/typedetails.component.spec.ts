import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypedetailsComponent } from './typedetails.component';

describe('TypedetailsComponent', () => {
  let component: TypedetailsComponent;
  let fixture: ComponentFixture<TypedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypedetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

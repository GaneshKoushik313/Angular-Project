import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCafetariaComponent } from './add-cafetaria.component';

describe('AddCafetariaComponent', () => {
  let component: AddCafetariaComponent;
  let fixture: ComponentFixture<AddCafetariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCafetariaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCafetariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCafetariaComponent } from './update-cafetaria.component';

describe('UpdateCafetariaComponent', () => {
  let component: UpdateCafetariaComponent;
  let fixture: ComponentFixture<UpdateCafetariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCafetariaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCafetariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

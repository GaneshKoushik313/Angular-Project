import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCafetariaComponent } from './list-cafetaria.component';

describe('ListCafetariaComponent', () => {
  let component: ListCafetariaComponent;
  let fixture: ComponentFixture<ListCafetariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCafetariaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCafetariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispenseItemComponent } from './dispense-item.component';

describe('DispenseItemComponent', () => {
  let component: DispenseItemComponent;
  let fixture: ComponentFixture<DispenseItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispenseItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DispenseItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check if user has selected the product',()=>{});

  it('check if user has sufficient balance to buy the selected product',()=>{})

});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeInventoryComponent } from './change-inventory.component';

describe('ChangeInventoryComponent', () => {
  let component: ChangeInventoryComponent;
  let fixture: ComponentFixture<ChangeInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeInventoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show initial change available in machine',()=>{})
});

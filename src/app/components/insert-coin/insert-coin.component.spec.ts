import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertCoinComponent } from './insert-coin.component';

describe('InsertCoinComponent', () => {
  let component: InsertCoinComponent;
  let fixture: ComponentFixture<InsertCoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertCoinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertCoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should tell user which coins machine will accept',()=>{})

  it('should check if the user inserted the machine acceptable coin', ()=>{})
});

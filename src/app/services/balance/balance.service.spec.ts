import { TestBed } from '@angular/core/testing';

import { BalanceService } from './balance.service';

describe('BalanceService', () => {
  let service: BalanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BalanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('should check the balance ',()=>{
    it('should set the balance',()=>{})
    it('should get the balance',()=>{})
    it('should add the balance',()=>{})
    it('should deduct the balance',()=>{})
    it('should clear the balance',()=>{})
    it('should show the coins user inserted in the machine',()=>{})
  });

  describe('should check the inserted coins',()=>{
    it('should show the coins user inserted in the machine ',()=>{})
    it('should get the coins user inserted in the machine ',()=>{})
    it('should clear the coins user inserted in the machine',()=>{})
  })
});

import { TestBed } from '@angular/core/testing';

import { ChangeService } from './change.service';

describe('ChangeService', () => {
  let service: ChangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('should check if machine have available balance to return to user', () => {
    it('should dispense the item and remaining change to user', () => {});
    it('should insert coins inserted by user to machine change inventory', () => {});
    it('should not give dollar bills as change', () => {});
    it('should return error if no change available to return user', () => {});
  });
});

import { Injectable } from '@angular/core';
import { BalanceService } from '../balance/balance.service';

@Injectable({
  providedIn: 'root',
})
export class ChangeService {
  constructor(private balanceService: BalanceService) {}

  coinInventory = { quarters: 2, dimes: 5, nickels: 3 };

  changeAvailable() {
    return this.coinInventory;
  }

  dispenseItem(): any {
    let remainingChange = Number(this.balanceService.getBalance().toFixed(2));
    const changeToUser = Number(this.balanceService.getBalance().toFixed(2));
    let availableChange =
      this.coinInventory.quarters * 0.25 +
      this.coinInventory.dimes * 0.1 +
      this.coinInventory.nickels * 0.05;

    if (availableChange < remainingChange) {
      this.balanceService.clearBalance();
      this.balanceService.clearInsetedCoins();
      return false;
    } else {

      const insertedCoins = this.balanceService.getInsertedCoins();
      insertedCoins.map((item: any) => {
        if (item == 0.25) this.coinInventory.quarters += 1;
        if (item == 0.1) this.coinInventory.dimes += 1;
        if (item == 0.05) this.coinInventory.nickels += 1;
      });

      let quartersToDispense = Math.floor(remainingChange / 0.25);
      if (quartersToDispense > this.coinInventory.quarters) {
        quartersToDispense = this.coinInventory.quarters;
        remainingChange -= this.coinInventory.quarters * 0.25;
        remainingChange = Number(remainingChange.toFixed(1));
        this.coinInventory.quarters =
          this.coinInventory.quarters - quartersToDispense;
      } else {
        remainingChange -= quartersToDispense * 0.25;
        remainingChange = Number(remainingChange.toFixed(1));
        this.coinInventory.quarters =
          this.coinInventory.quarters - quartersToDispense;
      }

      let dimesToDispense = Math.floor(remainingChange / 0.1);
      if (dimesToDispense > this.coinInventory.dimes) {
        dimesToDispense = this.coinInventory.dimes;
        remainingChange -= this.coinInventory.dimes * 0.1;
        remainingChange = Number(remainingChange.toFixed(1));
        this.coinInventory.dimes = this.coinInventory.dimes - dimesToDispense;
      } else {
        remainingChange -= dimesToDispense * 0.1;
        remainingChange = Number(remainingChange.toFixed(1));
        this.coinInventory.dimes = this.coinInventory.dimes - dimesToDispense;
      }

      let nicklesToDispense = Math.floor(remainingChange / 0.05);
      if (nicklesToDispense > this.coinInventory.nickels) {
        nicklesToDispense = this.coinInventory.nickels;
        remainingChange -= this.coinInventory.nickels * 0.05;
        remainingChange = Number(remainingChange.toFixed(1));
        this.coinInventory.nickels =
          this.coinInventory.nickels - nicklesToDispense;
      } else {
        remainingChange -= nicklesToDispense * 0.05;
        remainingChange = Number(remainingChange.toFixed(1));
        this.coinInventory.nickels =
          this.coinInventory.nickels - nicklesToDispense;
      }

      this.balanceService.clearInsetedCoins();
      this.balanceService.clearBalance();
      if (remainingChange === 0) {
        return { changeToUser, success: true };
      }
      return false;
    }
  }
}

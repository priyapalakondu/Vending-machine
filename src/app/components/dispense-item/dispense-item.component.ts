import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item/item.service';
import { BalanceService } from '../../services/balance/balance.service';
import { ChangeService } from '../../services/change/change.service';

@Component({
  selector: 'app-dispense-item',
  templateUrl: './dispense-item.component.html',
  styleUrls: ['./dispense-item.component.scss'],
})
export class DispenseItemComponent implements OnInit {
  constructor(
    private itemService: ItemService,
    private balanceService: BalanceService,
    private changeService: ChangeService
  ) {}

  ngOnInit() {}

  dispenseItem() {
    const currentBalance = this.balanceService.getBalance();
    if (!this.itemIsSelected()) return;
    if (!this.hasSufficientBalance(currentBalance)) return;

    const dispensedItem = this.itemService.getSelectedItem();
    this.balanceService.deductBalance(dispensedItem.price);

    const insertedCoins = this.balanceService.getInsertedCoins();
    const isItemDespensed = this.changeService.dispenseItem();
    
    const balance = this.balanceService.getBalance();
    if (isItemDespensed.success) {
      alert('Enjoy your ' + dispensedItem.name + 'Please collect change ' + isItemDespensed.changeToUser);
    } else {
      alert(
        'Unable to despense ' +
          dispensedItem.name +
          'Please collect your coins' +
          insertedCoins
      );
    }
  }

  itemIsSelected() {
    const itemIsSelected = !!this.itemService.getSelectedItem();
    if (!itemIsSelected) alert('No item selected');
    return itemIsSelected;
  }

  hasSufficientBalance(currentBalance: any) {
    const hasBalance = this.itemService.hasSufficientBalance(currentBalance);
    if (!hasBalance) alert('Insufficient balance');
    return hasBalance;
  }
}

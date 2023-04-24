import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private selectedItem: any;
  private subject: Subject<number> = new Subject<number>();
  constructor() {}

  private updateSubject(): void {
    this.subject.next(this.selectedItem);
  }

  getSelectedItem(): any {
    return this.selectedItem;
  }

  setSelectedItem(item: any): void {
    this.selectedItem = item;
    this.updateSubject();
  }
  
  hasSufficientBalance(currentBalance: number): boolean {
    if (!this.selectedItem) return false;
    const hasSufficientBalance = currentBalance >= this.selectedItem.price;
    return hasSufficientBalance;
  }
}

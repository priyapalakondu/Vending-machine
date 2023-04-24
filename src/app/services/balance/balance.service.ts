import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BalanceService {
  private balance: number = 0;
  private coins: any = [];
  private subject: Subject<number> = new Subject<number>();

  constructor() {}

  private updateSubject(): void {
    this.subject.next(this.balance);
  }

  setBalance(amount: any): void {
    this.balance = amount;
    this.updateSubject();
  }

  getBalance(): number {
    return this.balance;
  }

  addBalance(amount: any): void {
    this.balance += amount;
    this.updateSubject();
  }

  deductBalance(amount: any): void {
    this.balance -= amount;
    this.updateSubject();
  }

  clearBalance() {
    this.balance = 0;
    this.updateSubject();
  }

  onBalanceUpdated(callback: any): void {
    this.subject.asObservable().subscribe(callback);
  }

  // change

  showInsertedCoins(amount: any): any {
    this.coins.push(amount);
    this.coins = this.coins.sort(function (a: number, b: number) {
      return a - b;
    });
    return this.coins;
  }

  getInsertedCoins(): any {
    return this.coins;
  }

  clearInsetedCoins() {
    this.coins = [];
  }
}

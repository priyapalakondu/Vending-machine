import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InsertCoinComponent } from './components/insert-coin/insert-coin.component';

import { BalanceService } from './services/balance/balance.service';
import { ItemService } from './services/item/item.service';
import { ChangeService } from './services/change/change.service';
import { ItemsComponent } from './components/items/items.component';
import { DispenseItemComponent } from './components/dispense-item/dispense-item.component';
import { ChangeInventoryComponent } from './components/change-inventory/change-inventory.component';

@NgModule({
  declarations: [
    AppComponent,
    InsertCoinComponent,
    ItemsComponent,
    DispenseItemComponent,
    ChangeInventoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BalanceService, ItemService, ChangeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

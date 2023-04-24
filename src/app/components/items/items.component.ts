import { Component } from '@angular/core';
import { ItemService } from '../../services/item/item.service';

interface Product {
  id: number;
  name: string;
  price: number;
}
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent {
  items: Product[] = [
    { id: 1, name: 'Coke', price: 0.95 },
    { id: 2, name: 'Diet Coke', price: 0.9 },
    { id: 3, name: 'Candy Bar', price: 0.6 },
    { id: 4, name: 'Gum', price: 0.3 },
    { id: 5, name: 'Chips', price: 1.1 },
    { id: 6, name: 'Energy Drink', price: 1 }
  ];

  constructor(private itemService: ItemService) { }

  buyProduct(item: any) {
    this.itemService.setSelectedItem(item);
    alert(`${item.name} has been selected.`)
  }

}

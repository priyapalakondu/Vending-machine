import { Component, OnInit } from '@angular/core';
import { ChangeService } from '../../services/change/change.service';

@Component({
  selector: 'app-change-inventory',
  templateUrl: './change-inventory.component.html',
  styleUrls: ['./change-inventory.component.scss'],
})
export class ChangeInventoryComponent implements OnInit {
  change: any;

  constructor(public changeService: ChangeService) {}

  ngOnInit() {
    this.change = this.changeService.changeAvailable();
  }
}

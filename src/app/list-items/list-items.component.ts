import { Component } from '@angular/core';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent {
  items: string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inventaire-item',
  templateUrl: './inventaire-item.component.html',
  styleUrls: ['./inventaire-item.component.scss']
})
export class InventaireItemComponent {
  @Input()  code:any;
  @Input()  inv:any;
  @Input() animation!:boolean; 
}

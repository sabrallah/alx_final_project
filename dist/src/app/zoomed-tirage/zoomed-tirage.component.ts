import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-zoomed-tirage',
  templateUrl: './zoomed-tirage.component.html',
  styleUrls: ['./zoomed-tirage.component.scss']
})
export class ZoomedTirageComponent {
  @Input() qtt!: number; 
  @Input() ligne!: number;
  @Input() tireur!:string; 
  @Input() index!:any;
  @Input() animation!:boolean; 
}

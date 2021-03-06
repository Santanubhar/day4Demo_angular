import {Component, Input, Output,  EventEmitter} from '@angular/core';

@Component({
  selector: 'ratings',
  template: `
      <span *ngFor="let r of range; let i = index">
        <i class="glyphicon" [ngClass]="i < rate ? 'glyphicon-star' : 'glyphicon-star-empty'"></i>
      </span>
  `
  
})
export class RatingComponent {
  private range:Array<number> = [1,2,3,4,5];
  @Input() private rate:number;
}
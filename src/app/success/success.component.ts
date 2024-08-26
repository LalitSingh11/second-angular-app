import { Component } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css'],
})
export class SuccessComponent {
  arr: number[] = [];
  onToggle = () => {
    this.arr.push(this.arr.length + 1);
  };
  checkSize = () => {
    return this.arr.length > 5;
  };
}

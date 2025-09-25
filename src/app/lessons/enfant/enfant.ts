import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-enfant',
  imports: [],
  templateUrl: './enfant.html',
  styleUrl: './enfant.css'
})
export class Enfant {

  @Input() message: string='';
  @Input() counter: number=0;
  @Output() notify = new EventEmitter<string>();



  notifyParent() {
    this.notify.emit(`Counter is now from enfant: ${this.counter}`);
  }

}

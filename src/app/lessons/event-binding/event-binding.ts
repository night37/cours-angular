import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Add this import

@Component({
  selector: 'app-event-binding',
  imports: [FormsModule],
  templateUrl: './event-binding.html',
  styleUrl: './event-binding.css'
})
export class EventBinding {

inputValue: string = "";
sendFriend: boolean = false;
btnIsDisabled: boolean = false;


constructor() {
  setTimeout(() => {
    this.btnIsDisabled = ! this.btnIsDisabled
  }, 5000);
}



}

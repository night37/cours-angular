import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-property-binding',
  imports: [FormsModule, CommonModule],
  templateUrl: './property-binding.html',
  styleUrl: './property-binding.css'
})
export class PropertyBinding {
  oneFriendId: number = 99;
  oneFriendName: string = "Steven Cigale";
  oneFriendAge: number = 25;
  oneFriendStatus: string = "Offline";
  oneFriendBio: string = "Steven Cigale is a French film producer";
  oneFriendImgUrl: string = "https://picsum.photos/seed/picsum/200/300";
  color: string = "red"

  getOneFriendStatus(): string {
    return this.oneFriendStatus;
  }

  statusHandler() :void {
    if( this.oneFriendStatus === "Offline" ) {
      this.oneFriendStatus = "Online"
      this.color= "green"
      return
    }
    this.oneFriendStatus = "Offline"
    this.color= "red"
  }
}

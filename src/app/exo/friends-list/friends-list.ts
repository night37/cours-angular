import { Component } from '@angular/core';
import { OneFriend } from '../one-friend/one-friend';
@Component({
  selector: 'app-friends-list',
  imports: [OneFriend],
  templateUrl: './friends-list.html',
  styleUrl: './friends-list.css',
  standalone: true,

})

export class FriendsList {


  lesAmis = [
    {
        id: 'lasticot',
        name: 'COCO L ASTICOT',
        phone: '01234 5678 991',
        email: 'coco@lasticot.com',
        premium: true
    },
    {
        id: 'lasticot2',
        name: 'COCO L ASTICOT',
        phone: '01234 5678 991',
        email: 'coco@lasticot.com',
        premium: true
    },
    {
        id: 'kimonoSurUnFrigo',
        name: "Steven Seagal",
        phone: '+338765477',
        email: 'steven@seagal.com',
        premium: true
    },
    {
        id: 'yoyoyo',
        name: "JAROD",
        phone: '+338765477',
        email: 'jAROD@seagal.com',
        premium: true
    }
  ];

  addFriend() {
    this.lesAmis.push(
          {
        id: 'yoyoyo',
        name: "JAROD",
        phone: '+338765477',
        email: 'jAROD@seagal.com',
        premium: true
    }
    )
  }

}

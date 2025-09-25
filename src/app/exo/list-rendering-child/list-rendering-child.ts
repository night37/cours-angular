import { Component,Input,Output,EventEmitter } from '@angular/core';
interface Profil {
      id: number,
      firstName: string,
      lastName: string,
      email: string,
      isActive: boolean,
      role: string
  }

@Component({
  selector: 'app-list-rendering-child',
  imports: [],
  templateUrl: './list-rendering-child.html',
  styleUrl: './list-rendering-child.css'
})


export class ListRenderingChild {

  @Input() userProfile? : Profil

}

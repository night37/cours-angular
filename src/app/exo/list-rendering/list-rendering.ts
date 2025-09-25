import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ListRenderingChild } from '../list-rendering-child/list-rendering-child';
@Component({
  selector: 'app-list-rendering',
  imports: [FormsModule, CommonModule, ListRenderingChild],
  templateUrl: './list-rendering.html',
  styleUrl: './list-rendering.css'
})
export class ListRendering {

  name :string = ""

   userProfiles  = [
    {
      id: 1,
      firstName: 'Jean',
      lastName: 'Dupont',
      email: 'jean.dupont@example.com',
      isActive: true,
      role: 'administrateur'
    },
    {
      id: 2,
      firstName: 'Marie',
      lastName: 'Martin',
      email: 'marie.martin@example.com',
      isActive: false,
      role: 'utilisateur'
    },
    {
      id: 3,
      firstName: 'Pierre',
      lastName: 'Durand',
      email: 'pierre.durand@example.com',
      isActive: true,
      role: 'modérateur'
    },
    {
      id: 4,
      firstName: 'Sophie',
      lastName: 'Lefebvre',
      email: 'sophie.lefebvre@example.com',
      isActive: true,
      role: 'utilisateur'
    }
  ];


  createUser () {
    this.userProfiles.push(
    {
      id: Math.random() * 100,
      firstName: this.name,
      lastName: 'Lefebvre',
      email: 'sophie.lefebvre@example.com',
      isActive: true,
      role: 'utilisateur'
    }
    )


    console.log(this.userProfiles);
  }
}



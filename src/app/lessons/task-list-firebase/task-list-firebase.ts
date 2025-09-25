import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Database, set, ref, push, onValue } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-task-list-firebase',
  imports: [FormsModule],
  templateUrl: './task-list-firebase.html',
  styleUrl: './task-list-firebase.css'
})
export class TaskListFirebase {

    newTask = { title: '', status: 'pending' }; // Tâche à ajouter
    tasks: { title: string; status: string }[] = []; // Liste des tâches

  constructor(private db:Database){
    const tasksRef = ref(this.db, 'tasks');
     onValue(tasksRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      this.tasks = data ? Object.values(data) : [];
      console.log(this.tasks);
    });

  }

  addTask() {
      console.log(this.newTask);
      if (this.newTask.title.trim()) {
        const tasksRef = ref(this.db, 'tasks');
        const newTaskRef = push(tasksRef);
        set(newTaskRef, this.newTask); // Enregistrer l'objet newTask
        this.newTask = { title: '', status: 'pending' }; // Réinitialiser le champ
      }
  }

}

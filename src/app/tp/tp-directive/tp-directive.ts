import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tp-directive',
  imports: [FormsModule, CommonModule],
  templateUrl: './tp-directive.html',
  styleUrl: './tp-directive.css'
})
export class TpDirective {


  toggleDetails :boolean = true
  btnLabel :string = "Afficher détails"
  array :number[] = []


  detailsHandler =  () :void => {
    this.toggleDetails = !this.toggleDetails
    this.btnLabel = this.toggleDetails ? "Afficher détails" : "Masquer Détails"
    this.array.push(this.array.length +1)



  }

}

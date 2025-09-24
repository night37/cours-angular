import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navigation } from './layout/navigation/navigation';
import { Footer } from './layout/footer/footer';
import { TpDirective } from './tp/tp-directive/tp-directive';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navigation, Footer, TpDirective],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('cours-angular');
}

import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Login } from './Pages/login/login';
import { Home } from './Pages/home/home';
import { Aboutus } from './Pages/aboutus/aboutus';

@Component({
  selector: 'app-root1',
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  styleUrl: './app.scss'
  styleUrl: './app.scss'
})

export class App {
  protected readonly title = signal('kjhsjkhskjdhjkshdjhsdjh');
  protected readonly title = signal('kjhsjkhskjdhjkshdjhsdjh');
  protected readonly title = signal('kjhsjkhskjdhjkshdjhsdjh');
  protected readonly title = signal('kjhsjkhskjdhjkshdjhsdjh');
}

import { Component } from '@angular/core';
import { Home } from './home/home';
import { NavBar } from './nav-bar/nav-bar';

@Component({
  selector: 'app-root',
  imports: [Home,NavBar],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}

import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  navList = [
    {
      title: "SERIES",
      href: '/series',
    },
    {
      title: "TV SHOWS",
      href: '/series',
    },
    {
      title: "PREMIERE",
      href: '/premiere',
    },
    {
      title: "CINEMA",
      href: '/cinema',
    }
  ]
}

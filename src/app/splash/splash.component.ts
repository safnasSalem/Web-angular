import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SplashComponent implements OnInit {
  WindowWidth: string = '';
  isNavbarVisible: boolean = true; // Flag to control navbar visibility

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Set the flag to false when the splash screen is loading
    this.isNavbarVisible = false;

    setTimeout(() => {
      this.WindowWidth = '-' + window.innerWidth + 'px';
      // Set the flag back to true after the loading period
      this.isNavbarVisible = true;
    }, 2500);
  }
}

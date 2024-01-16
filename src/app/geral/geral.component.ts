import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-geral',
  templateUrl: './geral.component.html',
  styleUrls: ['./geral.component.css']
})

export class GeralComponent {
  navVisible = false;
  isMobile = false;

  toggleNav() {
    this.navVisible = !this.navVisible;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkWindowSize();
  }

  ngOnInit() {
    this.checkWindowSize();
  }

  private checkWindowSize() {
    this.isMobile = window.innerWidth <= 768;
  }
}

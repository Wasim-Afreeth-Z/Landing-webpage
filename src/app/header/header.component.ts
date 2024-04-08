import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  menuValue: boolean = true;
  menuIcon: string = "fa fa-bars"

  openMenu() {
    this.menuValue = !this.menuValue
    // console.log(this.menuValue = !this.menuValue);

    this.menuIcon = !this.menuValue ? "fa fa-close" : "fa fa-bars";
  }

  home(){
    document.getElementById('home')?.scrollIntoView({behavior:'smooth'})
  }
  about(){
    document.getElementById('about')?.scrollIntoView({behavior:'smooth'})
  }
  contact(){
    document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})
  }
  service(){
    document.getElementById('service')?.scrollIntoView({behavior:'smooth'})
  }
  project(){
    document.getElementById('project')?.scrollIntoView({behavior:'smooth'})
  }

}

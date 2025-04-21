import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBarComponent } from "./side-bar/side-bar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, SideBarComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {  
}

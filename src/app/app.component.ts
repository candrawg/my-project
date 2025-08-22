import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { CopyrightComponent } from './copyright/copyright.component';
import {MatBadgeModule} from '@angular/material/badge';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, MatToolbarModule, MatButtonModule,
    RouterLink, CopyrightComponent, MatBadgeModule
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'my-project';
  sendCopyRight: string = 'copyright works!';
}
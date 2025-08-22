import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [MatIconModule, MatButtonModule, MatDividerModule, NgClass],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  isActive: boolean = true;
  
  about = 'template works!';
  fruits = ["apple", "banana", "cherry"];
}

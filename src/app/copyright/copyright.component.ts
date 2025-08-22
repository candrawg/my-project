import { Component, Input } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'app-copyright',
  imports: [MatToolbar],
  templateUrl: './copyright.component.html',
  styleUrl: './copyright.component.css'
})
export class CopyrightComponent {
  @Input() copyRight: string = '';
}

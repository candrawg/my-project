import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  socialMedia: string | undefined;

  onClick(click: string) {
    this.socialMedia = click;
  }

}

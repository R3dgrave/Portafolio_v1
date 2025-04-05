import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  public svg = [
    {
      text: 'Ver CV',
      icon1: '../../../assets/svg/word.svg',
    },
    {
      text: 'diego.abmdz@gmail.com',
      icon2: '../../../assets/svg/gmail.svg',
    },
    {
      text: 'Linkedin',
      icon3: '../../../assets/svg/linkedin.svg',
    },
    {
      text: 'Github',
      icon4: '../../../assets/svg/github.svg',
    },
    {
      text: 'Localización',
      icon5: '../../../assets/svg/maps.svg',
    },
  ];
}

import { Component } from '@angular/core';
import { Registrationform } from './form.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  registrationModel: Registrationform = new Registrationform()

}

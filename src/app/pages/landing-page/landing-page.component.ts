import { Component } from '@angular/core';
import {BaseBtnComponent} from '../../components/base/base-btn/base-btn.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    BaseBtnComponent
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})

export class LandingPageComponent {

}

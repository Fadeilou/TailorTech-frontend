
import { Component } from '@angular/core';
import {
  trigger, state, style, transition, animate
} from '@angular/animations';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        'max-height': '500px', 'opacity': '1', 'visibility': 'visible'
      })),
      state('out', style({
        'max-height': '0px', 'opacity': '0', 'visibility': 'hidden'
      })),
      transition('in => out', [animate('400ms ease-in-out')]),
      transition('out => in', [animate('400ms ease-in-out')])
    ])
  ]
})
export class HomeComponent {
  openedItemId: number | null = null;
  faqItems = [
    {
      id: 1,
      question: 'How does this whole "custom" thing work?',
      answer: 'Your answer here...'
    },
    {
      id: 2,
      question: 'Do I have to purchase before getting measured?',
      answer: 'Your answer here...'
    },
    // ... ajoutez d'autres questions et réponses comme nécessaire
  ];

  toggleAnswer(itemId: number) {
    if (this.openedItemId === itemId) {
      this.openedItemId = null;
    } else {
      this.openedItemId = itemId;
    }
  }

  animationState(itemId: number): string {
    return this.openedItemId === itemId ? 'in' : 'out';
  }
}

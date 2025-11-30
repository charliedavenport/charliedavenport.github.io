import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Input } from '@angular/core';

@Component({
  selector: 'app-face-card',
  imports: [NgOptimizedImage],
  template: `
    <div class="face-div">
      <img class="face-img" [ngSrc]="imagePath" width="313" height="342" alt='selfie'>
    </div>
  `,
  styleUrl: './face-card.scss',
})
export class FaceCard {
  @Input() imagePath!: string;
}

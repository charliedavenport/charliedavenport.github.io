import { Component, Input } from '@angular/core';
import { FaceCardComponent } from "../face-card/face-card.component";

@Component({
    selector: 'app-tab-page',
    imports: [FaceCardComponent],
    templateUrl: './tab-page.template.html',
    styleUrl: './tab-page.scss'
})
export class TabPageComponent {
    @Input() faceImagePath!: string;
}
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FaceCard } from "./face-card/face-card";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FaceCard],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  protected readonly faceImagePath: string = "PXL_20241115_225128016.jpg"
}

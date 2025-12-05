import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

import { TabPageComponent } from "./tab-page/tab-page.component";
import { FaceCardComponent } from "./face-card/face-card.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatTabsModule, TabPageComponent, MatToolbarModule, MatIconModule, MatButtonModule, FaceCardComponent],
  templateUrl: './app.template.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  protected readonly faceImagePath: string = "PXL_20241115_225128016.jpg"
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { TabPageComponent } from "./tab-page/tab-page.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatTabsModule, TabPageComponent],
  templateUrl: './app.template.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  protected readonly faceImagePath: string = "PXL_20241115_225128016.jpg"
}

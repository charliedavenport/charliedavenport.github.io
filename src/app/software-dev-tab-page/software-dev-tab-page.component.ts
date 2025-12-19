import { Component, ChangeDetectionStrategy, signal } from "@angular/core";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatDividerModule } from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';

@Component({
    selector: 'software-dev-tab-page',
    imports: [MatExpansionModule, MatDividerModule, MatListModule],
    templateUrl: './software-dev-tab-page.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SoftwareDevTabPageComponent {

}
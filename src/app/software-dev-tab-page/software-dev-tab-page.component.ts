import { Component, ChangeDetectionStrategy, signal } from "@angular/core";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatDividerModule } from '@angular/material/divider';

@Component({
    selector: 'software-dev-tab-page',
    imports: [MatExpansionModule, MatDividerModule],
    templateUrl: './software-dev-tab-page.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SoftwareDevTabPageComponent {

}
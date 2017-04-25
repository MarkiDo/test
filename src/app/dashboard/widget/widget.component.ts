import { Component, Input } from '@angular/core';
import { DashboardComponent } from 'app/dashboard/dashboard.component';
@Component({
  selector: 'ita-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent {

  @Input() public title: string;
  @Input() public status: string;
  @Input() public data: string;

}

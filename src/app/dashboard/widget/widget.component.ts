import { Component, Input } from '@angular/core';
import { DashboardComponent } from 'app/dashboard/dashboard.component';
@Component({
  selector: 'ita-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent {

  @Input() title: string;
  @Input() status: string;
  @Input() data: string;

}

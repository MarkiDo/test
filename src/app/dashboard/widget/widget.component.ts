import { Component, Input } from '@angular/core';
import { DashboardComponent } from 'app/dashboard/dashboard.component';
import { MdDialog } from '@angular/material';
@Component({
  selector: 'ita-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent {
  constructor(public dialog: MdDialog) {
 }
  @Input() title: string;
  @Input() status: string;
  @Input() data: string;
  
 
}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ita-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {

  @Input() title: string;
  @Input() status: string;
  @Input() data: string;

  ngOnInit() {
  }

}

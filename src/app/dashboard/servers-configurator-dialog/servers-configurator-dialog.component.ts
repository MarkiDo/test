import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ita-servers-configurator-dialog',
  templateUrl: './servers-configurator-dialog.component.html',
  styleUrls: ['./servers-configurator-dialog.component.scss']
})
export class ServersConfiguratorDialogComponent {
  constructor(public translate: TranslateService) {}
}

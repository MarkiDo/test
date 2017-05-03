import { InjectionToken } from '@angular/core';
export let DIALOG = new InjectionToken<DialogConfig>('dialog-config');
export interface DialogConfig {
  width: string;
  height: string;
}
export const DIALOG_CONFIG: DialogConfig = {
 width : '600px',
 height : 'auto'
};

import { InjectionToken } from '@angular/core';
export let APP_CONFIG = new InjectionToken<AppConfig>('app-config');
export interface AppConfig {
  width: string;
  height: string;
}
export const DIALOG_CONFIG: AppConfig = {
 width : '550px',
 height : 'auto'
};

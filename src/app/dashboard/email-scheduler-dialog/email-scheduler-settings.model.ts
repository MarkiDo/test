import { EmailLang } from './email-lang.interface';
export interface SettingsDate {
  day: number;
  month: number;
  year: number;
}
export class EmailSchedulerSettings {
  public name: string;
  public description: string;
  public option: string;
  public date: SettingsDate;
  public langs: EmailLang[];
  constructor(obj?: any) {
    this.name = obj && obj.name || null;
    this.description = obj && obj.description || null;
    this.option = obj && obj.option || null;
    this.date = obj && obj.date || null;
    this.langs = obj && obj.langs || null;
  }
}

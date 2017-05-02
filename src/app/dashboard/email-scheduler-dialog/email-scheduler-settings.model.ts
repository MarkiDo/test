export class EmailSchedulerSettings {
  public name: string;
  public description: string;
  public option: string;
  public date: Object;
  constructor(obj?: any) {
    this.name = obj && obj.name || null;
    this.description = obj && obj.description || null;
    this.option = obj && obj.option || null;
    this.date = obj && obj.date || null;
  }
}

export class Visiting{
  public country: string;
  public email: string;
  public traffic: number;
  public website: string;
  constructor(obj?: any){
        this.country= obj && obj.country || null;
        this.email= obj && obj.email || null;
        this.traffic= obj && obj.traffic || null;
        this.website= obj && obj.website || null;
  }
}

import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './../../services/firebase.service';
@Component({
  selector: 'reporting',
  templateUrl: './reporting.component.html',
  styleUrls: ['./reporting.component.scss']
})
export class ReportingComponent implements OnInit {
 public lineChartData: any[];
 public lineChartLabels: any[];
 public lineChartOptions: any = { responsive: true};
 public lineChartLegend: boolean = true;
 public lineChartType: string = 'line';

 public pieChartData: number[];
 public pieChartLabels: string[];
 public pieChartType: string = 'pie';
 
 public barChartOptions:any = {
    scaleShowVerticalLines: true,
    responsive: true
  };
  public barChartLabels:string[];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
  public barChartData:any[] ;

 
 constructor (private firebaseservice: FirebaseService){};

 public ngOnInit(){
   this.pieChartData = [];
   let somedata= [];
   this.pieChartLabels= [];
   this.lineChartData= [];
   this.lineChartLabels= [];
   this.barChartLabels=[];
   this.barChartData=[];
   this.firebaseservice.getVisitData().subscribe(
    (result)=>{
      result.reverse().map((current)=> {
        this.barChartData.push(current.traffic);
        this.barChartLabels.push(current.website);
        this.lineChartData.push(current.traffic);
        this.lineChartLabels.push(current.email);
        this.pieChartData.push(current.traffic);
        this.pieChartLabels.push(current.country);
        somedata.push(current);
        
      });
      console.log(this);
    });
 }

 public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
  
}

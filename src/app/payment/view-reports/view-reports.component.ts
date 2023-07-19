import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../payment.service';
import { Router } from '@angular/router';
import { Payment } from 'src/app/models/api-models/payment.model';
import { Reports } from 'src/app/models/api-models/reports.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-view-reports',
  templateUrl: './view-reports.component.html',
  styleUrls: ['./view-reports.component.css'],
  providers: [DatePipe]
})
export class ViewReportsComponent implements OnInit{

  constructor(private paymentService:PaymentService,private router:Router,
    private datePipe: DatePipe){ }
  reports!:Reports[];

  ngOnInit(): void {
    this.paymentService.getReports()
    .subscribe(
      (successResponse)=>{
        this.reports=successResponse;
        console.log(successResponse);
      },
      (errorResponse)=>{
        console.log(errorResponse);
      }
    );
  }

}

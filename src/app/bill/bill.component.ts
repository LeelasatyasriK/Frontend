import { Component, OnInit } from '@angular/core';
import { Bill } from '../models/api-models/bill.model';
import { PaymentService } from '../payment/payment.service';
import { BillService } from './bill.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
  paymentId!: string;
  billId1!:string;
  bill:Bill={
    billId: '',
    checkinDate: '',
    checkoutDate: '',
    taxAmount: 0,
    totalAmount: 0,
    paymentId: ''
  }
  bill1:any={

    checkinDate: '',
    checkoutDate: '',
    taxAmount: 0,
    totalAmount: 0,
    paymentId: ''
  }
  billId2!: string;
  constructor(private paymentService: PaymentService,
    private billservice:BillService,
    private readonly route: ActivatedRoute,
    private snackbar:MatSnackBar,
    private router:Router) {}

  ngOnInit(): void {
    // Retrieve the paymentId from the PaymentService
    this.bill1.paymentId = this.paymentService.getPaymentId();
    this.bill1.checkinDate=new Date().toISOString();
    this.bill1.checkoutDate=new Date().toISOString();

      this.billservice.addBill(this.bill1)
          .subscribe(
            (successResponse) => {
              const generatedbillId = successResponse.billId;
              this.billId2=generatedbillId;
              console.log(this.billId2);
          this.billservice.setBillId(generatedbillId);
              this.snackbar.open('Bill Details Added Successfully..!', undefined, {
                duration: 2000
              });


            },
            (errorResponse) => {

            }
          );
    }
    fetchBill(billid:any){
     // this.redirect("pdf");
     this.billservice.generateBill(billid).subscribe(res=>{
      let blob:Blob=res.body as Blob;
      let url= window.URL.createObjectURL(blob);

      let a=document.createElement('a');
      a.download=billid;
      a.href=url;
      a.click();
     });
    }

     redirect(redirect:any) {
       this.router.navigate([redirect]);
        }

    // fetchBill(): void {
    //   if (this.billId1) {
    //     console.log(this.billId1);
    //     this.billservice.generateBill(this.billId1).subscribe(
    //       (sussresp) => {
    //         this.snackbar.open('pdf generated Successfully..!', undefined, {
    //           duration: 2000
    //         });
    //       },
    //       (errorResponse) => {
    //         // Handle error response
    //       }
    //     );
    //   }
    // }

  }



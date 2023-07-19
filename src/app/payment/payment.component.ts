import { Component, OnInit } from '@angular/core';
import { PaymentService } from './payment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Payment } from '../models/api-models/payment.model';
import { ReservationService } from '../reservation/reservation.service';
import { RoomService } from '../rooms/room.service';
import { BillService } from '../bill/bill.service';
import { Bill } from '../models/api-models/bill.model';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  payment:Payment={
    paymentId: '',
    amount: 0,
    creditCardDetails: '',
    paymentTime: '',
    reservationId: ''
  }
  bill:Bill={
    billId: '',
    checkinDate: '',
    checkoutDate: '',
    taxAmount: 0,
    totalAmount: 0,
    paymentId: ''
  }
 resId!:string;
 paymentData!:Payment;
 paymentId1!: string;
// generatedPaymentId!:string;

  constructor(private readonly paymentService:PaymentService,
    private reservationService:ReservationService,
    private roomservice:RoomService,
    private billservice:BillService,
    private readonly route: ActivatedRoute,
    private snackbar:MatSnackBar,
    private router:Router){}
    amou!:number;
    date:string=new Date().toISOString();
    ngOnInit(): void {
      this.paymentData = {
        paymentId:'',
        amount: 0,
        creditCardDetails: '',
        paymentTime: '',
        reservationId: ''
      };

      this.route.queryParams.subscribe(params => {
        const reservationId = params['reservationId'];
        this.resId = reservationId;

        // Use the reservationId as needed in the payment page
        // ...
      });

      this.getReser();
     // this.getRoom();


  }

  noOfNights!:number;
  roomNo!:number;
  getReser(){
    this.reservationService.getReservation(this.resId).subscribe((res:any)=>{
          this.noOfNights=res.numberOfNights;
          this.roomNo=res.roomNumber;

           this.getRoom();

    })
  }

  pay!:number;
  getRoom(){
    this.roomservice.getRoom(this.roomNo).subscribe((res:any)=>{
         this.pay=res.price;
         this.amou=this.pay*this.noOfNights;

    })
  }
  addpayment(item: any) {

  console.log(item.value)
    const creditCardDetails = item.value.creditCardDetails;
    this.payment.creditCardDetails = creditCardDetails;
    this.payment.amount=this.pay*this.noOfNights;
    this.payment.paymentTime=new Date().toISOString();
    console.log(this.payment);
    this.paymentService.addPayment(item.value)
      .subscribe(
        (successResponse) => {
          console.log(this.payment)
          console.log(successResponse);
          const generatedPaymentId = successResponse.paymentId;
          this.paymentService.setPaymentId(generatedPaymentId);
         // console.log(this.generatedPaymentId);
          // this.bill.paymentId=this.generatedPaymentId;


          // this.billservice.addBill(this.bill).subscribe(
          //   (succresp)=>{
             // console.log(this.bill);
          //   },(errsp)=>{ }
          // );

          this.snackbar.open('Payment Details Added Successfully..!', undefined, {
            duration: 2000
          });
          // this.billservice.addBill(this.bill);
          //this.confirmPayment(this.bill.paymentId)
          this.router.navigate(['bill']);
        },
        (errorResponse) => {
          this.snackbar.open('Please fill all the details correctly..!', undefined, {
            duration: 2000
          });
        }
      );
  }
  // confirmPayment(item:any){
  //   console.log(item);
  //    this.billservice.addBill(item).subscribe(
  //           (succresp)=>{
  //             console.log(this.bill);
  //           },(errsp)=>{ }
  //         );

  // }
  goback():void{

  }
}


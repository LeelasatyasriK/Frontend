import { Component, OnInit } from '@angular/core';
import { BillService } from '../bill.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent implements OnInit {
  billId!:string;

  constructor(private billService: BillService,
    private readonly route: ActivatedRoute,
    private snackbar:MatSnackBar,
    private router:Router) {}

  ngOnInit(): void {
    this.billId = this.billService.getBillId();
    console.log(this.billId);
    this.billService.generateBill(this.billId)
    .subscribe(
      (successResponse) => {
        const downloadLink = successResponse.headers.get('location');

        if (downloadLink) {
          // Perform any necessary actions with the download link
          console.log(downloadLink);

          // Open the download link in a new window/tab
          window.open(downloadLink, '_blank');
        }

        this.snackbar.open('Bill Details Added Successfully..!', undefined, {
          duration: 2000
        });


      },
      (errorResponse) => {

      }
    );
  }

}

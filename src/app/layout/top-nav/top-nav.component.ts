import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit{

  loggedInRole: string = ''; // Add this line to define the loggedInRole property

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    // Retrieve the stored role from local storage
    this.loggedInRole = this.localStorageService.retrieve('loggedInRole');
  }

}

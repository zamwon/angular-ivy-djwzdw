import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, VERSION } from '@angular/core';
import { Borrow } from './model/borrow';
import { BorrowService } from './service/borrow.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  public borrows: Borrow[];

  constructor(private borrowService: BorrowService){}

  ngOnInit() {
    this.getBorrow();
  }

  public getBorrow(): void {
    this.borrowService.getBorrow().subscribe(
      (response : Borrow[]) => {
        this.borrows = response;
      }, 
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}

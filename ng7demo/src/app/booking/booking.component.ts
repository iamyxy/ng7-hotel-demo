import { Component, OnInit } from '@angular/core';
import {BookingService} from '../shared/services/booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  rowData = {};
  constructor(private bs: BookingService) {

    bs.getBookings()
      .subscribe((res) => {
        this.elements = res;
      });

  }
  elements: any = [];

  headElements = ['ID', 'In date', 'Out date', 'Name', 'Type', 'Member', 'Personal ID'];

  ngOnInit() {

  }

  editBooking(value) {
    this.rowData = value;
    // console.log(this.rowData);
  }

  deleteBooking(bookingFromChild) {
    this.bs.deleteBooking(bookingFromChild)
      .subscribe(res => {
        this.bs.getBookings()
          .subscribe(res => {
            this.elements = res;
          });
      });
  }
  declineBooking(bookingFromChild) {
    this.bs.deleteBooking(bookingFromChild)
      .subscribe(res => {
        this.bs.getBookings()
          .subscribe(res => {
            this.elements = res;
          });
      });
  }




  // settings = {
  //   add: {
  //     addButtonContent: '',
  //     createButtonContent: '<i class="nb-checkmark"></i>',
  //     cancelButtonContent: '<i class="nb-close"></i>',
  //   },
  //   edit: {
  //     // editButtonContent: '<i class="nb-edit"></i>',
  //     // saveButtonContent: '<i class="nb-checkmark"></i>',
  //     // cancelButtonContent: '<i class="nb-close"></i>',
  //   },
  //   delete: {
  //     // deleteButtonContent: '<i class="nb-trash"></i>',
  //     // confirmDelete: true,
  //   },
  //   columns: {
  //     booking_id: {
  //       title: 'ID'
  //     },
  //     in_date: {
  //       title: 'In Date'
  //     },
  //     out_date: {
  //       title: 'Out Date'
  //     },
  //     status: {
  //       title: 'Status'
  //     },
  //     customer_name: {
  //       title: 'Name'
  //     },
  //     room: {
  //       title: 'Room'
  //     },
  //     roomtype: {
  //       title: 'Room Type'
  //     },
  //     member: {
  //       title: 'Member'
  //     },
  //     personal_id: {
  //       title: 'Personal Id'
  //     }
  //   }
  // };

}

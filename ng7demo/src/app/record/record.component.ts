import { Component, OnInit } from '@angular/core';
import {RecordService} from '../shared/services/record.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss']
})
export class RecordComponent implements OnInit {

  source = [];

  constructor(private rs: RecordService,
              private router: Router) {

    rs.getRecords()
      .subscribe((res) => {
        this.source = res;
      });
  }

  ngOnInit() {

  }
  settings = {
    delete: {
      confirmDelete: true,
      deleteButtonContent: '<i class="material-icons">delete_forever</i>'
    },
    add: {
      addButtonContent: '',
      confirmCreate: true,
    },
    edit: {
      confirmSave: true,
      editButtonContent: '<i class="material-icons">edit</i>',
      saveButtonContent: '<i class="material-icons">done</i>',
      cancelButtonContent: '<i class="material-icons">clear</i>'
    },
    columns: {
      record_id: {
        title: 'ID'
      },
      in_date: {
        title: 'In Date'
      },
      out_date: {
        title: 'Out Date'
      },
      status: {
        title: 'Status'
      },
      customer_name: {
        title: 'Name'
      },
      room_id: {
          title: 'Room'
      },
      room_type: {
        title: 'Room Type'
      },
      member_id: {
        title: 'Member'
      },
      personal_id: {
        title: 'Personal Id'
      }
    }
  };
  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
      this.rs.deleteRecord(event.data.record_id)
        .subscribe(res => {
          if (res.success) {
            this.router.navigate(['/record']);
          }
        });
    } else {
      event.confirm.reject();
    }
  }

  onEditConfirm(event) {
    if (window.confirm('Are you sure you want to save?')) {
      event.confirm.resolve();
      this.rs.addRecord(event.newData)
        .subscribe(res => {
          if (res.success) {
            this.router.navigate(['/record']);
          }
        });
    } else {
      event.confirm.reject();
    }
  }
}

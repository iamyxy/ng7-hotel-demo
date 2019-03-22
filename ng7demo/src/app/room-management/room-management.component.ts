import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {RoomManagementService} from '../shared/services/room-management.service';

@Component({
  selector: 'app-room-management',
  templateUrl: './room-management.component.html',
  styleUrls: ['./room-management.component.scss']
})
export class RoomManagementComponent implements OnInit {

  source = [];

  constructor(private rs: RoomManagementService,
              private router: Router) {

    rs.getRooms()
      .subscribe((res) => {
        this.source = res;
      });
  }

  ngOnInit() {

  }
  settings = {
    delete: {
      confirmDelete: true,
      deleteButtonContent: '<i class="material-icons">delete_forever</i>',
    },
    add: {
      confirmCreate: true,
      addButtonContent: '<i class="material-icons">add</i>',
      createButtonContent: '<i class="material-icons">done</i>',
      cancelButtonContent: '<i class="material-icons">clear</i>'
    },
    edit: {
      confirmSave: true,
      editButtonContent: '<i class="material-icons">edit</i>',
      saveButtonContent: '<i class="material-icons">done</i>',
      cancelButtonContent: '<i class="material-icons">clear</i>'
    },
    columns: {
      room_id: {
        title: 'ID',
        editable: false
      },
      price: {
        title: 'Price'
      },
      type: {
        title: 'Type'
      }
    }
  };

  onCreateConfirm(event) {
    event.confirm.resolve();
    console.log(event.newData);
    this.rs.addRoom(event.newData)
      .subscribe(res => {
        if (res.success) {
          this.router.navigate(['/room-management']);
        }
      });
  }
  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
      this.rs.deleteRoom(event.data.room_id)
        .subscribe(res => {
          if (res.success) {
            this.router.navigate(['/room-management']);
          }
        });
    } else {
      event.confirm.reject();
    }
  }

  onEditConfirm(event) {
    event.confirm.resolve();
    this.rs.addRoom(event.newData)
      .subscribe(res => {
        if (res.success) {
          this.router.navigate(['/room-management']);
        }
      });
  }

}

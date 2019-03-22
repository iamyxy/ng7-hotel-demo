import {Component, DoCheck, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RecordService} from '../../shared/services/record.service';
import {Router} from '@angular/router';
import {RoomManagementService} from '../../shared/services/room-management.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit, DoCheck {
  @Input('rowData')
  rowData;

  oldRowData;

  toRecordData = {};

  roomList = [];

  _roomList = [];

  @Output()
  delete: EventEmitter <number> = new EventEmitter<number>();

  @Output()
  decline: EventEmitter <number> = new EventEmitter<number>();

  constructor(private rs: RecordService,
              private router: Router,
              private  rms: RoomManagementService) {
    rms.getRooms()
      .subscribe(res => {
        this.roomList = res;
        this._roomList = res;
        console.log(this.roomList);
      });
    console.log(this.rowData);
  }

  ngDoCheck() {
    if (this.rowData !== this.oldRowData) {
      this._roomList = this.roomList.filter(obj => {
        return obj.type === this.rowData.room_type;
      });
      console.log(this._roomList);
      console.log(this.roomList);
      this.oldRowData = this.rowData;
    }
  }

  ngOnInit() {

  }

  onSubmit(value) {
    console.log(value);
    this.toRecordData = {
      "record_id": null,
      "in_date": value.in_date,
      "out_date": value.out_date,
      "status": value.status,
      "customer_name": value.customer_name,
      "room_id": +value.room,
      "room_type": value.roomtype,
      "member_id": +value.member,
      "personal_id": value.personal_id
    };
    console.log(this.toRecordData);
    this.rs.addRecord(this.toRecordData)
      .subscribe(res => {
        if (res.success) {
          this.delete.emit(this.rowData.booking_id);
        }
      });
    this._roomList = this.roomList;
  }

  onDecline() {
    this.decline.emit(this.rowData.booking_id);
  }
}

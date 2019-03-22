import { Component, OnInit } from '@angular/core';
import {RoomTypeService} from '../shared/services/room-type.service';

@Component({
  selector: 'app-room-type',
  templateUrl: './room-type.component.html',
  styleUrls: ['./room-type.component.scss']
})
export class RoomTypeComponent implements OnInit {

    roomTypes = [];

  constructor(private rts: RoomTypeService) {
    rts.getRoomTypes()
      .subscribe(res => {
        this.roomTypes = res;
      });
  }

  deleteRoomType(roomTypeFromChild) {
    this.rts.deleteRoomType(roomTypeFromChild)
      .subscribe(res => {
        this.rts.getRoomTypes()
          .subscribe(res => {
            this.roomTypes = res;
          });
      });
  }

  ngOnInit() {
  }

}

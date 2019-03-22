import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RoomTypeService} from '../../shared/services/room-type.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-room-type-overview',
  templateUrl: './room-type-overview.component.html',
  styleUrls: ['./room-type-overview.component.scss']
})
export class RoomTypeOverviewComponent implements OnInit {
  @Input('roomType')
  roomType;

  @Output()
  delete: EventEmitter <number> = new EventEmitter<number>();

  constructor(private rts: RoomTypeService,
              private router: Router) { }

  ngOnInit() {
  }

  // editRoomType(roomType) {
  //   this.rts.getRoomType(roomType)
  //     .subscribe(res => {
  //       console.log(res);
  //     });
  // }

  // deleteRoomType(roomType) {
  //   //   console.log(roomType);
  //   //   this.rts.deleteRoomType(roomType)
  //   //     .subscribe(res => {
  //   //       if (res.success) {
  //   //         this.router.navigate(['/room-type']);
  //   //       }
  //   //     });
  //   // }
  deleteRoomType(roomType) {
    this.delete.emit(roomType);
  }
}

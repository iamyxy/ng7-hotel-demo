import { Component, OnInit } from '@angular/core';
import {RoomTypeService} from '../../shared/services/room-type.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-room-type-detail',
  templateUrl: './room-type-detail.component.html',
  styleUrls: ['./room-type-detail.component.scss']
})
export class RoomTypeDetailComponent implements OnInit {

  roomType = {};
  constructor(private rts: RoomTypeService,
              private router: Router,
              private ar: ActivatedRoute) { }

  ngOnInit() {
    this.ar.paramMap
      .subscribe(params => {
        console.log(params.get('type'));
        const type = params.get('type');
        this.rts.getRoomType(type)
          .subscribe(res => {
            this.roomType = res;
          });
      });
  }

  submit(value) {
    console.log(this.roomType);
    console.log(value);
    this.rts.deleteRoomType(this.roomType.type)
      .subscribe(res => {
      });
    this.rts.addRoomType(value)
      .subscribe(res => {
        if (res.success) {
          this.router.navigate(['/room-type']);
        }
      });
  }
}

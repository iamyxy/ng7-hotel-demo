import { Component } from '@angular/core';
import {RecordService} from '../shared/services/record.service';
import {RoomManagementService} from '../shared/services/room-management.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  rooms = [];
  checkedInRooms = [];
  bookedRate = 0;
  constructor(private rs: RecordService,
              private rms: RoomManagementService) {
    this.rs.getRecords()
      .subscribe(res => {
        this.rooms = res;
        this.checkedInRooms = this.rooms.filter(function(obj) {
          return obj.status === 'in';
        });
        this.rms.getRooms()
          .subscribe(res => {
            this.doughnutChartData = [this.checkedInRooms.length, res.length - this.checkedInRooms.length];
            this.bookedRate = Math.round((this.checkedInRooms.length / res.length) * 100);
          });
      });


  }
  // Doughnut
  public doughnutChartLabels: string[] = ['Booked', 'Available'];
   doughnutChartData: number[] = [0, 0];
  public doughnutChartType = 'doughnut';

  dayNumber = {
    Sunday: 0,
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6
  };

  lineChartData: Array<any> = [
    {data: [0.82, 0.75, 0.54, 0.66, 0.55, 0.44], label: 'Percent Occupied'}
  ];
  public lineChartLabels: Array<any> = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';

  onSubmit(value) {
    // console.log(value);
    // console.log(this.dayNumber[value.day]);
    // this.lineChartData[0].data[this.dayNumber[value.day]] = +value.percent;
    // console.log(this.lineChartData);
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        if (_lineChartData[i].data) {
          _lineChartData[i].data[j] = this.lineChartData[i].data[j];
        }
      }
    }
    _lineChartData[0].data[this.dayNumber[value.day]] = +value.percent;
    this.lineChartData = _lineChartData;
  }

  // events
  public chartClicked(e:any) {
    console.log(e);
    console.log(this.rooms[1].status);
    console.log(this.bookedRate);
  }

  public chartHovered(e:any) {
    console.log(e);
  }

}

import { Component, OnInit } from '@angular/core';
import {MemberService} from '../shared/services/member.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {

  source = [];

  constructor(private ms: MemberService,
              private router: Router) {

    ms.getMembers()
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
      member_id: {
        title: 'ID',
        editable: false
      },
      points: {
        title: 'Points'
      },
      name: {
        title: 'Name'
      },
      email: {
        title: 'Email'
      },
      personal_id: {
        title: 'Personal Id'
      },
      phone: {
        title: 'Phone',
      }
    }
  };

  onCreateConfirm(event) {
    event.confirm.resolve();
    console.log(event.newData);
    this.ms.addMember(event.newData)
      .subscribe(res => {
        if (res.success) {
          this.router.navigate(['/member']);
        }
      });
  }
  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
      this.ms.deleteMember(event.data.member_id)
        .subscribe(res => {
          if (res.success) {
            this.router.navigate(['/member']);
          }
        });
    } else {
      event.confirm.reject();
    }
  }

  onEditConfirm(event) {
    event.confirm.resolve();
    this.ms.addMember(event.newData)
      .subscribe(res => {
        if (res.success) {
          this.router.navigate(['/member']);
        }
      });
  }
}

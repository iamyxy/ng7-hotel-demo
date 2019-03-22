import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {AppGuard} from './app.guard';
import {BookingComponent} from './booking/booking.component';
import {RecordComponent} from './record/record.component';
import {MemberComponent} from './member/member.component';
import {RoomManagementComponent} from './room-management/room-management.component';
import {RoomTypeComponent} from './room-type/room-type.component';
import {RoomTypeDetailComponent} from './room-type/room-type-detail/room-type-detail.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AppGuard]
  },
  {
    path: 'booking',
    component: BookingComponent,
    canActivate: [AppGuard]
  },
  {
    path: 'record',
    component: RecordComponent,
    canActivate: [AppGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'member',
    component: MemberComponent,
    canActivate: [AppGuard]
  },
  {
    path: 'room-management',
    component: RoomManagementComponent,
    canActivate: [AppGuard]
  },
  {
    path: 'room-type',
    component: RoomTypeComponent,
    canActivate: [AppGuard]
  },
  {
    path: 'room-type-detail',
    component: RoomTypeDetailComponent,
    canActivate: [AppGuard]
  },
  {
    path: 'room-type-detail/:type',
    component: RoomTypeDetailComponent,
    canActivate: [AppGuard]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

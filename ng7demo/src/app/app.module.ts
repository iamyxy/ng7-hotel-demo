import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CurrencyExchangePipe } from './shared/pipes/currency-exchange.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PricePipe } from './shared/pipes/price.pipe';
import { MyShowDirective } from './shared/directives/my-show.directive';
import { MyIfDirective } from './shared/directives/my-if.directive';
import { ColorRedAlertHelloDirective } from './shared/directives/color-red-alert-hello.directive';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CustomStyleModule} from './shared/modules/custom-style/custom-style.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule, MatButtonModule, MatSidenavModule,
  MatIconModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule, MatDatepickerModule, MatNativeDateModule
}
  from '@angular/material';
import { BookingComponent } from './booking/booking.component';
import { RecordComponent } from './record/record.component';
import { MemberComponent } from './member/member.component';
import { RoomManagementComponent } from './room-management/room-management.component';
import { RoomTypeComponent } from './room-type/room-type.component';
import { RoomTypeOverviewComponent } from './room-type/room-type-overview/room-type-overview.component';
import { RoomTypeDetailComponent } from './room-type/room-type-detail/room-type-detail.component';
import { ManageComponent } from './booking/manage/manage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {ChartsModule} from 'ng2-charts';



// decorator: a function which adds additional functionality to existing class/func/variable
// metadata is the configuration inside
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CurrencyExchangePipe,
    PricePipe,
    MyShowDirective,
    MyIfDirective,
    ColorRedAlertHelloDirective,
    LoginComponent,
    RegisterComponent,
    SidenavComponent,
    BookingComponent,
    RecordComponent,
    MemberComponent,
    RoomManagementComponent,
    RoomTypeComponent,
    RoomTypeOverviewComponent,
    RoomTypeDetailComponent,
    ManageComponent,
    DashboardComponent
  ],
  // import the dependency module the [] in angular.module('mainApp',[])
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CustomStyleModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    Ng2SmartTableModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ChartsModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

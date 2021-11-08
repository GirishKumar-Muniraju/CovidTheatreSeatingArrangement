import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './material.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {
  InformationDialog,
  SeatManagementComponent,
} from './components/seat-management/seat-management.component';
import { TicketsBookingComponent } from './components/tickets-booking/tickets-booking.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SeatManagementComponent,
    TicketsBookingComponent,
    InformationDialog,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components Section
import { AppComponent } from './app.component';
import { SeatManagementComponent } from './components/seat-management/seat-management.component';
import { NoPageFoundComponent } from './components/no-page-found-component/no-page-found-component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TicketsBookingComponent } from './components/tickets-booking/tickets-booking.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: DashboardComponent },
  { path: 'seatmanagement', component: SeatManagementComponent },
  { path: 'ticketsbooking', component: TicketsBookingComponent },
  // { path: 'product-detail/:id', component: ProductDetailComponent },
  { path: '**', component: NoPageFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

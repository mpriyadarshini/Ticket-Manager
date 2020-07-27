import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { ScreenComponent } from './screen/screen.component';
import { TicketFormComponent } from './ticket-form/ticket-form.component';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';

const routes: Routes = [
  { path: '', component: ScreenComponent },
  { path: 'user/tickets', component: TicketListComponent },
  { path: 'user/tickets/new', component: TicketFormComponent },
  { path: 'user/tickets/details', component: TicketDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

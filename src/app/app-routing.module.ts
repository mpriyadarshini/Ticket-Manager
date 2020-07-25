import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { ScreenComponent } from './screen/screen.component';

const routes: Routes = [
  { path: '', component: ScreenComponent},
  { path : 'ticket-List',component: TicketListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

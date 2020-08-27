import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { ScreenComponent } from './screen/screen.component';
import { TicketFormComponent } from './ticket-form/ticket-form.component';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import { AgentViewComponent } from './agent-view/agent-view.component';
import { UserViewComponent } from './user-view/user-view.component';
import { AgentTicketListComponent } from './agent-ticket-list/agent-ticket-list.component';

const routes: Routes = [
  { path: '', component: ScreenComponent },
  {
    path: 'user',
    component: UserViewComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'tickets' },
      { path: 'tickets', component: TicketListComponent },
      { path: 'tickets/new', component: TicketFormComponent },
      { path: 'tickets/:id', component: TicketDetailsComponent },
    ],
  },
  {
    path: 'agent',
    component: AgentViewComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'tickets' },
      {
        path: 'tickets',
        component: AgentTicketListComponent,
        children: [{ path: 'details', component: TicketDetailsComponent }],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

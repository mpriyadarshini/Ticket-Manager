import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScreenComponent } from './screen/screen.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { TicketFormComponent } from './ticket-form/ticket-form.component';
import { HeaderComponent } from './header/header.component';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import { TicketComponent } from './ticket/ticket.component';
import { AgentViewComponent } from './agent-view/agent-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ScreenComponent,
    TicketListComponent,
    TicketFormComponent,
    HeaderComponent,
    TicketDetailsComponent,
    TicketComponent,
    AgentViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

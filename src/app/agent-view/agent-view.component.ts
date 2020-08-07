import { Component, OnInit } from '@angular/core';
import { TicketListComponent } from '../ticket-list/ticket-list.component';
import { TicketComponent } from '../ticket/ticket.component';
@Component({
  selector: 'app-agent-view',
  templateUrl: './agent-view.component.html',
  styleUrls: ['./agent-view.component.scss']
})
export class AgentViewComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}

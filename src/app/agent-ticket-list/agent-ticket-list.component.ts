import {Component, OnInit} from '@angular/core';
import {Ticket, TicketService} from '../services/ticket.service';

@Component({
  selector: 'app-agent-ticket-list',
  templateUrl: './agent-ticket-list.component.html',
  styleUrls: ['./agent-ticket-list.component.scss']
})
export class AgentTicketListComponent implements OnInit {

  tickets: Ticket[] = [];

  constructor(private ticketService: TicketService) {
  }

  ngOnInit(): void {
    this.tickets = this.ticketService.getAllTickets();
  }

}

import {Component, OnInit} from '@angular/core';
import {Ticket, TicketService} from '../services/ticket.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit {

  tickets: Ticket[] = [];

  constructor(private ticketService: TicketService) {
  }

  ngOnInit(): void {
    this.tickets = this.ticketService.getAllTickets();
  }

}

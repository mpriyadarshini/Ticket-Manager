import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Ticket, TicketService} from '../services/ticket.service';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.scss']
})
export class TicketDetailsComponent implements OnInit {

  ticket: Ticket;

  constructor(private route: ActivatedRoute, private ticketService: TicketService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.ticket = this.ticketService.getTicket(params.get('id'));
    });
  }

}

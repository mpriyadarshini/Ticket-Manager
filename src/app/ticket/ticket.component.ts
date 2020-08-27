import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss'],
})
export class TicketComponent implements OnInit {
  @Input() ticketId: string;
  @Input() title: string;
  @Input() state: string;
  @Input() created: Date;

  constructor() {
  }

  ngOnInit(): void {
  }
}

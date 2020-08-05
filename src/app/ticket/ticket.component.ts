import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss'],
})
export class TicketComponent implements OnInit {
  @Input() title: string;
  @Input() state: string;
  @Input() created: Date;
  constructor() {}

  ngOnInit(): void {}
}

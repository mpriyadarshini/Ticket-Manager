import {Injectable} from '@angular/core';

export interface TicketReplies {
  id: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Ticket {
  id: string;
  subject: string;
  state: 'open' | 'closed';
  createdAt: Date;
  updatedAt: Date;
  replies: TicketReplies[];
}

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private dummyTicketStorage = new Map<string, Ticket>();

  constructor() {
    this.dummyTicketStorage.set('2', {
      id: '2',
      subject: 'Update Redis Cache Cookbook',
      state: 'open',
      createdAt: new Date('2020-08-28 01:24:11+05:30'),
      updatedAt: new Date('2020-08-28 01:24:11+05:30'),
      replies: [
        {
          id: '3',
          content: 'Updated redis cookbook to v1.0.0. Please validate and merge',
          createdAt: new Date('2020-08-28 01:24:11+05:30'),
          updatedAt: new Date('2020-08-28 01:24:11+05:30')
        },
        {
          id: '4',
          content: 'Sure, will take a look',
          createdAt: new Date('2020-08-28 02:00:18+05:30'),
          updatedAt: new Date('2020-08-28 02:00:18+05:30')
        }
      ]
    });

    this.dummyTicketStorage.set('1', {
      id: '1',
      subject: 'Setup redis database',
      state: 'closed',
      createdAt: new Date('2020-08-28 01:24:11+05:30'),
      updatedAt: new Date('2020-08-28 01:24:11+05:30'),
      replies: [
        {
          id: '1',
          content: 'Please setup a redis cluster for staging environment',
          createdAt: new Date('2020-08-28 01:24:11+05:30'),
          updatedAt: new Date('2020-08-28 01:24:11+05:30')
        },
        {
          id: '2',
          content: 'As per your request, we have provisioned a redis cluster for' +
            ' you. We have sent you the access keys over encrypted email.',
          createdAt: new Date('2020-08-28 02:00:18+05:30'),
          updatedAt: new Date('2020-08-28 02:00:18+05:30')
        }
      ]
    });
  }

  getAllTickets(): Ticket[] {
    return [...this.dummyTicketStorage.values()];
  }

  getTicket(id: string): Ticket | undefined {
    return this.dummyTicketStorage.get(id);
  }

}

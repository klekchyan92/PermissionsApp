import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  serviceArray: any[] = [{
    Name: "Admins",
    roles: [1, 3,]
  },
  {
    Name: "General Managers",
    roles: [2, 4,]
  }, {
    Name: "Managers - Tech",
    roles: []
  }, {
    Name: "Managers - Billing",
    roles: []
  }, {
    Name: "Managers - Sales",
    roles: []
  }, {
    Name: "Support",
    roles: []
  }];

  rolesArray: any[] = [{
    id: 1,
    Name: 'Pizza Editor'
  },
  {
    id: 2,
    Name: 'Dust Sniffer'
  },
  {
    id: 3,
    Name: 'Poker Cheater'
  },
  {
    id: 4,
    Name: 'Drug User'
  },
  ]

  constructor() { }
}

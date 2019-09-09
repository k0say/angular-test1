import { Component, OnInit } from '@angular/core';
import { Person } from '../people';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  person: Person = {
    name: "pino",
    surname: "pinguino"
  };

  constructor() { }

  ngOnInit() {
  }

}
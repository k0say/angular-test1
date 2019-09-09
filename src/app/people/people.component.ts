import { Component, OnInit } from '@angular/core';
import { Person } from '../people';
import {PEOPLE} from '../mock-people';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  persone = PEOPLE;

  constructor() { }

  ngOnInit() {
  }

}
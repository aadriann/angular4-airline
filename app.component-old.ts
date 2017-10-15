import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'], // Contain a reference of our Sass file
  template: `
    <div class="app">
      <passenger-dashboard></passenger-dashboard>
    </div>`
      /*<!--<h1 [innerHTML]="title"></h1>
      <h1>{{ title + '!'}}</h1>
      <img [src]="logo"/>-->
      <!--<button (click)="handleClick(username.value)">
        Get Value
      </button>-->
      <!--<input 
        type="text" 
        [ngModel] = "name"
        (ngModelChange)="handleChange($event)">-->
      <!--<input type="text" #username/>-->

        <!--<input 
        type="text" 
        [(ngModel)] = "name">-->
      <!--<input 
        type="text" 
        [value] = "name"
        (input)="handleChange($event.target.value)">

      <template [ngIf] ="name.length > 2">
        <div>
          Searching for... {{ name }}
        </div>
      </template>

      <div *ngIf="name.length > 2">
        Searching for... {{ name }}
      </div>-->
      <!--<div>
        {{ numberOne + numberTwo }}
      </div>
      <div>
        {{ isHappy ? ':)' : ':(' }}
      </div>-->
      <!-- NgFor Lesson -->
      <!-- <h3>Airline Passengers</h3>
      <ul>
        <li *ngFor="let passenger of passengers; let i = index;">
          <span 
            class="status"
            [class.checked-in]="passenger.checkedIn">
          </span>
          {{ i }}: {{ passenger.fullname }}
          <p>{{ passenger | json }}</p>
          <div>
            Check In date: 
            {{ passenger.checkInDate ? (passenger.checkInDate | date: 'yMMMMd' | uppercase) : 'Not checked in' }}
          </div>
          <div class="children">
          <!-- Safe navigation: ? evaluate the expression behind the '?' avoid mistakes -->
            Children: {{ passenger.children?.length || 0 }}
          </div>
        </li>
      </ul>-->

     <!--<h3>Airline Passengers</h3>
      <ul>
        <li *ngFor="let passenger of passengers; let i = index;">
          <span 
            class="status"
            [ngClass]="{ 
              'checked-in': passenger.checkedIn,
              'checked-out': !passenger.checkedIn
            }">
          </span>
          {{ i }}: {{ passenger.fullname }}
        </li>
      </ul>
      
      ngstyle lesson
      <h3>Airline Passengers</h3>
      <ul>
        <li *ngFor="let passenger of passengers; let i = index;">
          <span 
            class="status"
            [style.backgroundColor]="(passenger.checkedIn ? '#2ecc71' : '#c0392b')">
          </span>
          {{ i }}: {{ passenger.fullname }}
        </li>
      </ul>
      <h3>Airline Passengers</h3>
      <ul>
        <li *ngFor="let passenger of passengers; let i = index;">
          <span 
            class="status"
            [ngStyle]="{
              backgroundColor: (passenger.checkedIn ? '#2ecc71' : '#c0392b')
            }">
          </span>
          {{ i }}: {{ passenger.fullname }}
        </li>
      </ul>-->*/
})
export class AppComponent {
  /*title: string;
  name: string = '';
  logo: string = 'img/logo.svg';
  numberOne: number = 1;
  numberTwo: number = 2;
  isHappy: boolean = true;*/

  /*constructor() {
    this.title = 'Ultimate Angular';
  }*/

  /*handleClick(value: string) {
    console.log(value);
  }*/
  /*handleChange(value: string) {
    this.name = value;
    console.log(event);
  }*/
  // NgFor Lesson
  /*passengers: Passenger[] = [{
    id: 1,
    fullname: 'Stephen',
    checkedIn: true,
    checkInDate: 1490742000000,
    children: null
  }, {
    id: 2,
    fullname: 'Rose',
    checkedIn: false,
    checkInDate: null,
    children: [{ name: 'Ted', age: 12 },{ name: 'Chloe', age: 7 }]
  }, {
    id: 3,
    fullname: 'James',
    checkedIn: true,
    checkInDate: 1491606000000,
    children: null
  }, {
    id: 4,
    fullname: 'Louise',
    checkedIn: true,
    checkInDate: 1488412800000,
    children: [{ name: 'Jessica', age: 1 }]
  }, {
    id: 5,
    fullname: 'Tina',
    checkedIn: false,
    checkInDate: null,
    children: null
  }];*/
}
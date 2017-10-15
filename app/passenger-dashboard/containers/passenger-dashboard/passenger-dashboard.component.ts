import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { PassengerDashboardService } from '../../passenger-dashboard.service';

import { Passenger } from '../../models/passenger.interface';

@Component({
	selector: 'passenger-dashboard',
	styleUrls: ['passenger-dashboard.component.scss'],
	templateUrl: 'passenger-dashboard.component.html'
})

export class PassengerDashboardComponent implements OnInit {
	passengers: Passenger[];
	constructor(
		private router: Router,
		private passengerService: PassengerDashboardService
	) {}
	ngOnInit() {
		this.passengerService
			.getPassengers()
			// .then((data: Passenger[]) => this.passengers = data); -> Promise<Passenger
			.subscribe((data: Passenger[]) => this.passengers = data); // -> Observable<Passenger>
	}
	handleEdit(event: Passenger) {
		this.passengerService
			.updatePassenger(event)
      /*.then((data: Passenger) =>
          this.passengers = this.passengers.map((passenger: Passenger) => {
              if (passenger.id === event.id) {
                  passenger = Object.assign({}, passenger, event);
              }
              return passenger;
          })); -> Promise<Passenger*/
			.subscribe((data: Passenger) =>
				this.passengers = this.passengers.map((passenger: Passenger) => {
					if (passenger.id === event.id) {
						passenger = Object.assign({}, passenger, event);
					}
					return passenger;
				})); // -> Observable<Passenger>
	}
	handleRemove(event: Passenger) {
		this.passengerService
			.removePassenger(event)
      /*.then((data: Passenger) => {
          this.passengers = this.passengers.filter((passenger: Passenger) => {
              return passenger.id !== event.id;
          });
      }); -> Promise<Passenger*/
			.subscribe((data: Passenger) => {
				this.passengers = this.passengers.filter((passenger: Passenger) => {
					return passenger.id !== event.id;
				});
			}); //-> Observable<Passenger>
	}
	handleView(event: Passenger) {
		// imperating routing
		this.router.navigate(['/passengers', event.id]);
	}
}
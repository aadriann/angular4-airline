import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';

// service
import { PassengerDashboardService } from '../../passenger-dashboard.service';

// interfaces
import { Passenger } from '../../models/passenger.interface';

@Component({
	selector: 'passenger-viewer',
	styleUrls: ['passenger-viewer.component.scss'],
	templateUrl: 'passenger-viewer.component.html'
})

export class PassengerViewerComponent implements OnInit {
	passenger: Passenger;
	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private passengerService: PassengerDashboardService
	) {}
	ngOnInit() {
		this.route.params
			.switchMap((data: Passenger) => this.passengerService.getPassenger(data.id))
			.subscribe((data: Passenger) => this.passenger = data);
	}
	onUpdatePassenger(event: Passenger) {
		this.passengerService
			.updatePassenger(event)
			.subscribe((data: Passenger) => {
				this.passenger = Object.assign({}, this.passenger, event);
			})
	}
	goBack() {
		this.router.navigate(['/passengers']);
	}
}
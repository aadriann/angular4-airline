export interface Passenger {
	id: number,
	fullname: string,
	checkedIn: boolean,
	checkInDate?: number, // ? same that use | null
	baggage: string
}
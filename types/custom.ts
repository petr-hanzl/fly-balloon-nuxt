import {Balloon, Car, Driver, ExtendedUser, Flight, FlightStatus, FlightType, Pilot} from "~/types/collection.ts";

export interface FlightDetail extends Flight {
    balloons: Balloon
    cars: Car
    drivers: DriverDetail
    pilots: PilotDetail
    flight_status: FlightStatus
    flight_types: FlightType
}


export interface DriverDetail extends Driver {
    extended_users: ExtendedUser
}

export interface PilotDetail extends Pilot {
    extended_users: ExtendedUser
}

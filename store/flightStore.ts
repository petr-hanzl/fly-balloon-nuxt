import {defineStore} from "pinia";
import supabase from "~/supabase/client";
import {Balloon, Flight, FlightStatus, FlightType} from "~/types/collection";


export const useFlightStore = defineStore("flightStore", {
    state: () => ({
        flights: [] as Flight[],
        flightTypes: [] as FlightType[],
        flightStatus:[] as FlightStatus[]

    }),
    actions: {
        async fetchAllFlightTypes(force: boolean) {
            // do we need to fetch?
            if (!force && this.flightTypes && this.flightTypes.length > 0) {
                return
            }

            const { data, error } = await supabase
                .from("flight_types")
                .select()
            if (error) {
                console.log("error")
                console.log(error)
            }

            if (data) {
                console.log("data")
                console.log(data)

                this.flightTypes = data
            }
        },
        async fetchALlFlightStatus(force: boolean) {
            // do we need to fetch?
            if (!force && this.flightStatus) {
                if (this.flightStatus.length > 0) {
                    // todo WTF why cant i put this on same line????
                    return
                }
            }

            const { data, error } = await supabase
                .from("flight_status")
                .select()

            if (error) {
                console.log("error")
                console.log(error)
            }

            if (data) {
                console.log("data")
                console.log(data)

                this.flightStatus = data
            }
        },



        async fetchAllFlights(force: boolean) {
            // do we need to fetch?
            if (!force && this.flights) {
                if (this.flights.length > 0) {
                    // todo WTF why cant i put this on same line????
                    return
                }
            }

            const { data, error } = await supabase
                .from("flights")
                .select()
            if (error) {
                console.log("error")
                console.log(error)
            }

            if (data) {
                console.log("data")
                console.log(data)

                this.flights = data
            }
        },
        getFlightByID(flightID: number): Balloon | null {
            if (this.flights && this.flights.length > 0) {
                this.flights.forEach((flights) => {
                    if (flights.id == flightID) {
                        return flights
                    }
                })
            }
            return null
        },
        getFlightTypeByID(flightTypeID: number) {
            if (this.flightTypes && this.flightTypes.length > 0) {
                this.flightTypes.forEach(flightType => {
                    if (flightType.id == flightTypeID) {
                        return flightType
                    }
                })
            }
            return null
        },
        getFlightStatusByID(flightStatusID: number) {
            if (this.flightStatus && this.flightStatus.length > 0) {
                this.flightStatus.forEach(flightStatus => {
                    if (flightStatus.id == flightStatusID) {
                        return flightStatus
                    }
                })
            }
            return null
        }
    },
    getters: {
        getFlights(): Flight[]{
            return this.flights;
        },
        getFlightTypes(): FlightType[] {
            return this.flightTypes
        },
        getFlightStatus(): FlightStatus[] {
            return this.flightStatus
        }


    }
})

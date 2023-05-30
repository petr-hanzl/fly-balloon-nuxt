import {defineStore} from "pinia";
import supabase from "~/supabase/client";
import {FlightTicket} from "~/types/collection";


export const useFlightTicketStore = defineStore("flightTicketStore", {
    state: () => ({
        flightTickets: [] as FlightTicket[]

    }),
    actions: {
        async fetchAllFlightTickets(force: boolean) {
            // do we need to fetch?
            if (!force && this.flightTickets && this.flightTickets.length > 0) {
                return
            }

            const { data, error } = await supabase
                .from("flight_tickets")
                .select()
            if (error) {
                console.log("error")
                console.log(error)
            }

            if (data) {
                console.log("data")
                console.log(data)
                this.flightTickets = data
            }
        },
        getFlightTicketByID(flightTicketID: number): FlightTicket | null {
            if (this.flightTickets && this.flightTickets.length > 0) {
                this.flightTickets.forEach((flightTicket) => {
                    if (flightTicket.id == flightTicketID) {
                        return flightTicket
                    }
                })
            }
            return null
        }
    },
    getters: {
        getFlightTickets(): FlightTicket[]{
            return this.flightTickets;
        },


    }
})

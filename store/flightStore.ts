import { defineStore } from 'pinia'
import supabase from '~/supabase/client'
import { Flight, FlightStatus, FlightTicket, FlightType } from '~/types/collection'


export const useFlightStore = defineStore('flightStore', {
  state: () => ({
    flights: [] as Flight[],
    flightTypes: [] as FlightType[],
    flightStatus: [] as FlightStatus[],
    flightTickets: [] as FlightTicket[],

  }),
  actions: {
    async fetchFlights(force: boolean) {
      // do we need to fetch?
      // this prevents repeated loading and appending same items
      if (!force && this.flights && this.flights.length > 0) {
        return
      }

      const { data, error } = await supabase
          .from('flights')
          .select(
              `*, 
              flight_types(type, maximum_capacity), 
              flight_status(status),
              balloons(registration_number), 
              pilots(extended_users(first_name, last_name)),
              drivers(extended_users(first_name, last_name))`
          )
      if (error) {
        console.log('error')
        console.log(error)
      }
      if (data) {
        this.flights = data
        console.log(data)
      }




      // return list

    },

    // flights
    async fetchAllFlights (force: boolean) {
      // do we need to fetch?
      if (!force && this.flights) {
        if (this.flights.length > 0) {
          // todo WTF why cant i put this on same line????
          return
        }
      }

      const { data, error } = await supabase
        .from('flights')
        .select()
      if (error) {
        console.log('error')
        console.log(error)
      }

      if (data) {
        this.flights = data
      }
    },

    async createFlight (flight: Flight) {
      const { error } = await supabase
        .from('flights')
        .insert(flight)
      if (error) {
        console.log('error')
        console.log(error)
      }
    },

    async updateFlight (flight: Flight) {
      const { error } = await supabase
        .from('flights')
        .update(flight)
        .eq('id', flight.id)
    },

    async deleteFlight (flightID: number) {
      const { error } = await supabase
        .from('flights')
        .delete()
        .eq('id', flightID)
    },

    getFlightByID (flightID: number): Flight | null {
      if (this.flights && this.flights.length > 0) {
        this.flights.forEach((flights) => {
          if (flights.id == flightID) {
            return flights
          }
        })
      }
      return null
    },

    // flight types
    async fetchAllFlightTypes(force: boolean) {
      // do we need to fetch?
      if (!force && this.flightTypes && this.flightTypes.length > 0) {
        return
      }

      const { data, error } = await supabase
        .from('flight_types')
        .select()
      if (error) {
        console.log('error')
        console.log(error)
      }

      if (data) {
        this.flightTypes = data
      }
    },

    async createFlightType (flightType: FlightType) {
      const { error } = await supabase
        .from('flight_types')
        .insert(flightType)
      if (error) {
        console.log('error')
        console.log(error)
      }
    },

    async updateFlightType (flightType: FlightType) {
      const { error } = await supabase
        .from('flight_types')
        .update(flightType)
        .eq('id', flightType.id)
    },

    async deleteFlightType (flightTypeID: number) {
      const { error } = await supabase
        .from('flight_types')
        .delete()
        .eq('id', flightTypeID)
    },

    getFlightTypeByID (flightTypeID: number): FlightType | null {
      if (this.flightTypes && this.flightTypes.length > 0) {
        this.flightTypes.forEach((flightType) => {
          if (flightType.id == flightTypeID) {
            return flightType
          }
        })
      }
      return null
    },

    // flight status
    async fetchALlFlightStatus (force: boolean) {
      // do we need to fetch?
      if (!force && this.flightStatus) {
        if (this.flightStatus.length > 0) {
          // todo WTF why cant i put this on same line????
          return
        }
      }

      const { data, error } = await supabase
        .from('flight_status')
        .select()

      if (error) {
        console.log('error')
        console.log(error)
      }

      if (data) {
        this.flightStatus = data
      }
    },

    async createFlightStatus (flightStatus: FlightStatus) {
      const { error } = await supabase
        .from('flight_status')
        .insert(flightStatus)
      if (error) {
        console.log('error')
        console.log(error)
      }
    },

    async updateFlightStatus (flightStatus: FlightStatus) {
      const { error } = await supabase
        .from('flight_status')
        .update(flightStatus)
        .eq('id', flightStatus.id)
    },

    async deleteFlightStatus (flightStatusID: number) {
      const { error } = await supabase
        .from('flight_status')
        .delete()
        .eq('id', flightStatusID)
    },

    getFlightStatusByID (flightStatusID: number): FlightStatus | null {
      if (this.flightStatus && this.flightStatus.length > 0) {
        this.flightStatus.forEach((flightStatus) => {
          if (flightStatus.id == flightStatusID) {
            return flightStatus
          }
        })
      }
      return null
    },

    // flight tickets
    async fetchAllFlightTickets (force: boolean) {
      // do we need to fetch?
      if (!force && this.flightTickets && this.flightTickets.length > 0) {
        return
      }

      const { data, error } = await supabase
        .from('flight_tickets')
        .select()
      if (error) {
        console.log('error')
        console.log(error)
      }

      if (data) {
        console.log('data')
        console.log(data)
        this.flightTickets = data
      }
    },

    async createFlightTicket (flightTicket: FlightTicket) {
      const { error } = await supabase
        .from('flight_tickets')
        .insert(flightTicket)
      if (error) {
        console.log('error')
        console.log(error)
      }
    },

    async updateFlightTicket (flightTicket: FlightTicket) {
      const { error } = await supabase
        .from('flight_tickets')
        .update(flightTicket)
        .eq('id', flightTicket.id)
    },

    async deleteFlightTicket (flightTicketID: number) {
      const { error } = await supabase
        .from('flight_tickets')
        .delete()
        .eq('id', flightTicketID)
    },

    getFlightTicketByID (flightTicketID: number): FlightTicket | null {
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
    getFlights (): Flight[] {
      return this.flights
    },
    getFlightTypes (): FlightType[] {
      return this.flightTypes
    },
    getFlightStatus (): FlightStatus[] {
      return this.flightStatus
    },
    getFlightTickets (): FlightTicket[] {
      return this.flightTickets
    }

  }
})

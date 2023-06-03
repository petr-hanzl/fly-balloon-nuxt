import {defineStore} from "pinia";
import supabase from "~/supabase/client";
import {Reservation} from "~/types/collection";


export const useReservationStore = defineStore("ReservationStore", {
    state: () => ({
        reservations: [] as Reservation[]

    }),
    actions: {
        async fetchAllReservations(force: boolean) {

            // do we need to fetch?
            if (!force && this.reservations && this.reservations.length > 0) {
                return
            }

            const { data, error } = await supabase
                .from("reservations")
                .select()
            if (error) {
                console.log("error")
                console.log(error)
            }

            if (data) {
                console.log("data")
                console.log(data)
                this.reservations = data
            }
        },

        async createReservation(reservation: Reservation) {
            const { error } = await supabase
                .from("reservations")
                .insert(reservation)
            if (error) {
                console.log("error")
                console.log(error)
            }
        },

        async updateReservation(reservation: Reservation) {
            const { error } = await supabase
                .from("reservations")
                .update(reservation)
                .eq("id", reservation.id)
        },

        async deleteReservation(reservationID: number) {
            const { error } = await supabase
                .from("reservations")
                .delete()
                .eq("id", reservationID)
        },

        getReservationByID(reservationID: number): Reservation | null {
            if (this.reservations && this.reservations.length > 0) {
                this.reservations.forEach((reservation) => {
                    if (reservation.id == reservationID) {
                        return reservation
                    }
                })
            }
            return null
        }
    },
    getters: {
        getReservations(): Reservation[]{
            return this.reservations;
        },


    }
})

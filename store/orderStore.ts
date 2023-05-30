import {defineStore} from "pinia";
import supabase from "~/supabase/client";
import {Order} from "~/types/collection";


export const useOrderStore = defineStore("orderStore", {
    state: () => ({
        orders: [] as Order[]

    }),
    actions: {
        async fetchAllOrders(force: boolean) {
            // do we need to fetch?
            if (!force && this.orders && this.orders.length > 0) {
                return
            }

            const { data, error } = await supabase
                .from("orders")
                .select()
            if (error) {
                console.log("error")
                console.log(error)
            }

            if (data) {
                console.log("data")
                console.log(data)
                this.orders = data
            }
        },
        getOrderByID(orderID: number): Order | null {
            if (this.orders && this.orders.length > 0) {
                this.orders.forEach((order) => {
                    if (order.id == orderID) {
                        return order
                    }
                })
            }
            return null
        }
    },
    getters: {
        getOrders(): Order[]{
            return this.orders;
        },


    }
})

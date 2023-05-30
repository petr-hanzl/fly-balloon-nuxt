import {defineStore} from "pinia";
import supabase from "~/supabase/client";
import {Customer} from "~/types/collection";


export const useCustomerStore = defineStore("ustomerStore", {
    state: () => ({
        customers: [] as Customer[]

    }),
    actions: {
        async fetchAllCustomers(force: boolean) {

            // do we need to fetch?
            if (!force && this.customers && this.customers.length > 0) {
                return
            }

            const { data, error } = await supabase
                .from("customers")
                .select()
            if (error) {
                console.log("error")
                console.log(error)
            }

            if (data) {
                console.log("data")
                console.log(data)
                this.customers = data
            }
        },
        getCustomerByID(customerID: number): Customer | null {
            if (this.customers && this.customers.length > 0) {
                this.customers.forEach((customer) => {
                    if (customer.id == customerID) {
                        return customer
                    }
                })
            }
            return null
        }
    },
    getters: {
        getCustomers(): Customer[]{
            return this.customers;
        },


    }
})

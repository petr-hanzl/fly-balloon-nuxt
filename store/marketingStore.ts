import {defineStore} from "pinia";
import supabase from "~/supabase/client";
import {MarketingType, MarketingExpense, MarketingRevenue} from "~/types/collection";


export const useMarketingStore = defineStore("marketingStore", {
    state: () => ({
        marketingTypes: [] as MarketingType[],
        marketingExpenses: [] as MarketingExpense[],
        marketingRevenues: [] as MarketingRevenue[],

    }),
    actions: {
        async fetchAllMarketingTypes(force: boolean) {
            // do we need to fetch?
            if (!force && this.marketingTypes && this.marketingTypes.length > 0) {
                return
            }

            const { data, error } = await supabase
                .from("marketing_types")
                .select()

            if (error) {
                console.log("error")
                console.log(error)
            }

            if (data) {
                console.log("data")
                console.log(data)
                this.marketingTypes = data
            }
        },

        async fetchAllMarketingExpenses(force: boolean) {
            // do we need to fetch?
            if (!force && this.marketingExpenses && this.marketingExpenses.length > 0) {
                return
            }

            const { data, error } = await supabase
                .from("marketing_expenses")
                .select()

            if (error) {
                console.log("error")
                console.log(error)
            }

            if (data) {
                console.log("data")
                console.log(data)
                this.marketingExpenses = data
            }
        },

        async fetchAllMarketingRevenues(force: boolean) {
            // do we need to fetch?
            if (!force && this.marketingRevenues && this.marketingRevenues.length > 0) {
                return
            }

            const { data, error } = await supabase
                .from("marketing_revenues")
                .select()

            if (error) {
                console.log("error")
                console.log(error)
            }

            if (data) {
                console.log("data")
                console.log(data)
                this.marketingRevenues = data
            }
        },

    },
    getters: {




    }
})

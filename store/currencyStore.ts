import {defineStore} from "pinia";
import supabase from "~/supabase/client";
import {CurrencyType} from "~/types/collection";


export const useCurrencyStore = defineStore("currencyStore", {
    state: () => ({
        currencies: [] as CurrencyType[],

    }),
    actions: {
        async fetchAllCurrencies(force: boolean) {
            // do we need to fetch
            if (!force && this.currencies && this.currencies.length > 0) {
                return
            }

            const { data, error } = await supabase
                .from("currency_types")
                .select()

            if (error) {
                console.log("error")
                console.log(error)
            }

            if (data) {
                console.log("data")
                console.log(data)
                this.currencies = data
            }
        },

        async createCurrency(currency: CurrencyType) {
            const { error } = await supabase
                .from("extended_users")
                .insert(currency)
            if (error) {
                console.log("error")
                console.log(error)
            }
        },

        async updateCurrency(currency: CurrencyType) {
            const { error } = await supabase
                .from("currency_types")
                .update(currency)
                .eq("id", currency.id)
        },

        async deleteCurrency(currencyID: number) {
            const { error } = await supabase
                .from("currency_types")
                .delete()
                .eq("id", currencyID)
        },

        getCurrencyByID(currencyID: number): CurrencyType | null {
            if (this.currencies && this.currencies.length > 0) {
                this.currencies.forEach((currency) => {
                    if (currency.id === currencyID) {
                        return currency
                    }
                })
            }

            return null
        }
    },
    getters: {
        getAllCurrencies(): CurrencyType[] {
            return this.currencies
        }



    }
})

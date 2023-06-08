import { defineStore } from 'pinia'
import supabase from '~/supabase/client'
import { MarketingExpense, MarketingRevenue, MarketingType } from '~/types/collection'

export const useMarketingStore = defineStore('marketingStore', {
  state: () => ({
    marketingTypes: [] as MarketingType[],
    marketingExpenses: [] as MarketingExpense[],
    marketingRevenues: [] as MarketingRevenue[]

  }),
  actions: {
    async fetchAllMarketingTypes (force: boolean) {
      // do we need to fetch?
      if (!force && this.marketingTypes && this.marketingTypes.length > 0) {
        return
      }

      const { data, error } = await supabase
        .from('marketing_types')
        .select()

      if (error) {
        console.log('error')
        console.log(error)
      }

      if (data) {
        console.log('data')
        console.log(data)
        this.marketingTypes = data
      }
    },

    async createMarketingType (marketingType: MarketingType) {
      const { error } = await supabase
        .from('marketing_types')
        .insert(marketingType)
      if (error) {
        console.log('error')
        console.log(error)
      }
    },

    async updateMarketingType (marketingType: MarketingType) {
      const { error } = await supabase
        .from('marketing_types')
        .update(marketingType)
        .eq('id', marketingType.id)
    },

    async deleteMarketingType (marketingTypeID: number) {
      const { error } = await supabase
        .from('marketing_types')
        .delete()
        .eq('id', marketingTypeID)
    },

    getMarketingTypeByID (marketingTypeID: number): MarketingType | null {
      if (this.marketingTypes && this.marketingTypes.length > 0) {
        this.marketingTypes.forEach((marketingType) => {
          if (marketingType.id == marketingTypeID) {
            return marketingType
          }
        })
      }
      return null
    },

    async fetchAllMarketingExpenses (force: boolean) {
      // do we need to fetch?
      if (!force && this.marketingExpenses && this.marketingExpenses.length > 0) {
        return
      }

      const { data, error } = await supabase
        .from('marketing_expenses')
        .select()

      if (error) {
        console.log('error')
        console.log(error)
      }

      if (data) {
        console.log('data')
        console.log(data)
        this.marketingExpenses = data
      }
    },

    async createMarketingExpense (marketingExpense: MarketingExpense) {
      const { error } = await supabase
        .from('marketing_expenses')
        .insert(marketingExpense)
      if (error) {
        console.log('error')
        console.log(error)
      }
    },

    async updateMarketingExpense (marketingExpense: MarketingExpense) {
      const { error } = await supabase
        .from('marketing_expenses')
        .update(marketingExpense)
        .eq('id', marketingExpense.id)
    },

    async deleteMarketingExpense (marketingExpenseID: number) {
      const { error } = await supabase
        .from('marketing_expenses')
        .delete()
        .eq('id', marketingExpenseID)
    },

    getMarketingExpenseByID (marketingExpenseID: number): MarketingExpense | null {
      if (this.marketingExpenses && this.marketingExpenses.length > 0) {
        this.marketingExpenses.forEach((marketingExpense) => {
          if (marketingExpense.id == marketingExpenseID) {
            return marketingExpense
          }
        })
      }
      return null
    },

    async fetchAllMarketingRevenues (force: boolean) {
      // do we need to fetch?
      if (!force && this.marketingRevenues && this.marketingRevenues.length > 0) {
        return
      }

      const { data, error } = await supabase
        .from('marketing_revenues')
        .select()

      if (error) {
        console.log('error')
        console.log(error)
      }

      if (data) {
        console.log('data')
        console.log(data)
        this.marketingRevenues = data
      }
    },

    async createMarketingRevenue (marketingRevenue: MarketingRevenue) {
      const { error } = await supabase
        .from('marketing_revenues')
        .insert(marketingRevenue)
      if (error) {
        console.log('error')
        console.log(error)
      }
    },

    async updateMarketingRevenue (marketingRevenue: MarketingRevenue) {
      const { error } = await supabase
        .from('marketing_revenues')
        .update(marketingRevenue)
        .eq('id', marketingRevenue.id)
    },

    async deleteMarketingRevenue (marketingRevenueID: number) {
      const { error } = await supabase
        .from('marketing_revenues')
        .delete()
        .eq('id', marketingRevenueID)
    },

    getMarketingRevenueByID (marketingRevenueID: number): MarketingRevenue | null {
      if (this.marketingRevenues && this.marketingRevenues.length > 0) {
        this.marketingRevenues.forEach((marketingRevenue) => {
          if (marketingRevenue.id == marketingRevenueID) {
            return marketingRevenue
          }
        })
      }
      return null
    }

  },
  getters: {
    getMarketingExpenses (): MarketingExpense[] {
      return this.marketingExpenses
    },
    getMarketingTypes (): MarketingType[] {
      return this.marketingTypes
    },
    getMarketingRevenues (): MarketingRevenue[] {
      return this.marketingRevenues
    }

  }
})

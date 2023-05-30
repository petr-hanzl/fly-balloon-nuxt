import {defineStore} from "pinia";
import supabase from "~/supabase/client";
import {Expense, ExpenseType} from "~/types/collection";


export const useExpenseStore = defineStore("expenseStore", {
    state: () => ({
        expenses: [] as Expense[],
        expenseTypes: [] as ExpenseType[],

    }),
    actions: {
        async fetchAllExpenseTypes(force: boolean) {

            // do we need to fetch?
            if (!force && this.expenseTypes && this.expenseTypes.length > 0) {
                return
            }


            const { data, error } = await supabase
              .from("expense_types")
              .select()
            if (error) {
                console.log("error")
                console.log(error)
            }

            if (data) {
                console.log("data")
                console.log(data)

                this.expenseTypes = data
            }
        },

        async fetchAllExpenses(force: boolean) {

            // prefetch expense types
            await this.fetchAllExpenseTypes(force)

            // do we need to fetch?
            if (!force && this.expenses) {
                if (this.expenses.length > 0) {
                    // todo WTF why cant i put this on same line????
                    return
                }
            }


            const { data, error } = await supabase
                .from("expenses")
                .select()
            if (error) {
                console.log("error")
                console.log(error)
            }

            if (data) {
                console.log("data")
                console.log(data)

                this.expenses = data
            }
        },
        getExpenseByID(expenseID: number): Expense | null {
            if (this.expenses && this.expenses.length > 0) {
                this.expenses.forEach((expenses) => {
                    if (expenses.id == expenseID) {
                        return expenses
                    }
                })
            }
            return null
        },
        getExpenseTypeByID(expenseTypeID: number): ExpenseType | null {
            if (this.expenses && this.expenses.length > 0) {
                this.expenses.forEach((expenseType) => {
                    if (expenseType.id == expenseTypeID) {
                        return expenseType
                    }
                })
            }
            return null
        }
    },
    getters: {
        getExpenses(): Expense[]{
            return this.expenses;
        },
        getExpenseTypes(): ExpenseType[]{
            return this.expenseTypes;
        }


    }
})

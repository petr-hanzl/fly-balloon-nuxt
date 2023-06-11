import { defineStore } from 'pinia'
import supabase from '~/supabase/client'
import { Salary } from '~/types/collection'

export const useSalaryStore = defineStore('salaryStore', {
    state: () => ({
        salaries: [] as Salary[],

    }),
    actions: {
        async fetchAllSalaries (force: boolean) {
            // do we need to fetch?
            if (!force && this.salaries) {
                if (this.salaries.length > 0) {
                    // todo WTF why cant i put this on same line????
                    return
                }
            }

            const { data, error } = await supabase
                .from('salaries')
                .select()
            if (error) {
                console.log('create salary err')
                console.log(JSON.stringify(error))
            }

            if (data) {
                console.log('data')
                console.log(data)

                this.salaries = data
            }
        },
        async createSalary (salary: Salary) {
            const { error } = await supabase
                .from('salaries')
                .insert(salary)
            if (error) {
                console.log('error')
                console.log(error)
            }
        },

        async updateSalary (salary: Salary) {
            const { error } = await supabase
                .from('Salaries')
                .update(salary)
                .eq('id', salary.id)
        },

        async deleteSalary (salaryID: number) {
            const { error } = await supabase
                .from('Salaries')
                .delete()
                .eq('id', salaryID)
        },

        getSalaryByID (salaryID: number): Salary | null {
            if (this.salaries && this.salaries.length > 0) {
                this.salaries.forEach((salary) => {
                    if (salary.id == salaryID) {
                        return salary
                    }
                })
            }
            return null
        },


    },
    getters: {
        getSalaries (): Salary[] {
            return this.salaries
        },

    }
})

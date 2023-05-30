import {defineStore} from "pinia";
import supabase from "~/supabase/client";
import {Balloon} from "~/types/collection";


export const useBalloonStore = defineStore("balloonStore", {
    state: () => ({
        balloons: [] as Balloon[]

    }),
    actions: {
        async fetchAllBalloons(force: boolean) {

            // do we need to fetch?
            if (!force && this.balloons && this.balloons.length > 0) {
                return
            }

            const { data, error } = await supabase
                .from("balloons")
                .select()
            if (error) {
                console.log("error")
                console.log(error)
            }

            if (data) {
                console.log("data")
                console.log(data)
            }
        },
        getBalloonByID(balloonID: number): Balloon | null {
            if (this.balloons && this.balloons.length > 0) {
                this.balloons.forEach((balloon) => {
                    if (balloon.id == balloonID) {
                        return balloon
                    }
                })
            }
            return null
        }
    },
    getters: {
        getBalloons(): Balloon[]{
            return this.balloons;
        },


    }
})

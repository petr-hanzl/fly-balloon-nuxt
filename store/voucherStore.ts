import {defineStore} from "pinia";
import supabase from "~/supabase/client";
import {Voucher, VoucherStatus} from "~/types/collection";


export const useVoucherStore = defineStore("voucherStore", {
    state: () => ({
        vouchers: [] as Voucher[],
        voucherStatus: [] as VoucherStatus[]

    }),
    actions: {
        async fetchAllVouchers(force: boolean) {
            // do we need to fetch?
            if (!force && this.vouchers && this.vouchers.length > 0) {
                return
            }

            const { data, error } = await supabase
                .from("vouchers")
                .select()
            if (error) {
                console.log("error")
                console.log(error)
            }

            if (data) {
                console.log("data")
                console.log(data)
                this.vouchers = data
            }
        },
        async fetchAllVoucherStatus(force: boolean) {
            // do we need to fetch?
            if (!force && this.voucherStatus && this.voucherStatus.length > 0) {
                return
            }

            const { data, error } = await supabase
                .from("voucher_status")
                .select()
            if (error) {
                console.log("error")
                console.log(error)
            }

            if (data) {
                console.log("data")
                console.log(data)
                this.voucherStatus = data
            }
        },
        getVoucherByID(voucherID: number): Voucher | null {
            if (this.vouchers && this.vouchers.length > 0) {
                this.vouchers.forEach((voucher) => {
                    if (voucher.id == voucherID) {
                        return voucher
                    }
                })
            }
            return null
        },
        getVoucherStatusByID(voucherStatusID: number): Voucher | null {
            if (this.voucherStatus && this.voucherStatus.length > 0) {
                this.voucherStatus.forEach((voucherStatus) => {
                    if (voucherStatus.id == voucherStatusID) {
                        return voucherStatus
                    }
                })
            }
            return null
        }
    },
    getters: {
        getVouchers(): Voucher[]{
            return this.vouchers;
        },


    }
})

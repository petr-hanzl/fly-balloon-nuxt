import {defineStore} from "pinia";
import supabase from "~/supabase/client";
import {VoucherStatus, Voucher} from "~/types/collection";


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

        async createVoucher(voucher: Voucher) {
            const { error } = await supabase
                .from("voucher")
                .insert(voucher)
            if (error) {
                console.log("error")
                console.log(error)
            }
        },

        async updateVoucher(voucher: Voucher) {
            const { error } = await supabase
                .from("vouchers")
                .update(voucher)
                .eq("id", voucher.id)
        },

        async deleteVoucher(voucherID: number) {
            const { error } = await supabase
                .from("vouchers")
                .delete()
                .eq("id", voucherID)
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

        async createVoucherStatus(voucherStatus: VoucherStatus) {
            const { error } = await supabase
                .from("voucher_status")
                .insert(voucherStatus)
            if (error) {
                console.log("error")
                console.log(error)
            }
        },

        async updateVoucherStatus(voucherStatus: VoucherStatus) {
            const { error } = await supabase
                .from("voucher_status")
                .update(voucherStatus)
                .eq("id", voucherStatus.id)
        },

        async deleteVoucherStatus(voucherStatusID: number) {
            const { error } = await supabase
                .from("voucher_status")
                .delete()
                .eq("id", voucherStatusID)
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
        getVoucherStatus(): VoucherStatus[]{
            return this.voucherStatus;
        },


    }
})

<template>
  <div class="login-form">
    <v-card style="padding: 4rem">
      <h1 style="padding-bottom: 3rem ">
        FlyBalloon Admin Panel
      </h1>

      <v-sheet width="300" class="mx-auto">
        <v-form fast-fail @submit.prevent="signIn">
          <v-text-field
            v-model="email"
            class="form-field"
            label="Email"
            type="email"
            :rules="emailRules"
          />

          <v-text-field
            v-model="password"
            class="form-field"
            label="Password"
            type="password"
          />

          <v-btn type="submit" block class="mt-2">
            Submit
          </v-btn>
        </v-form>
      </v-sheet>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/store/authStore'

const authStore = useAuthStore()

const emailRules = [
  v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid!'
]

const email = ref('')
const password = ref('')

const signIn = async () => {
  console.log(email.value)
  console.log(password.value)
}

</script>

<style scoped>
.login-form {
    position: absolute;
    left: 50%; /* relative to nearest positioned ancestor or body element */
    top: 50%; /*  relative to nearest positioned ancestor or body element */
    transform: translate(-50%, -50%); /* relative to element's height & width */
}

.form-field {
    padding-bottom: 0.5rem
}

</style>

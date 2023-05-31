<template>
  <div>
    <NuxtWelcome />
  </div>
</template>
<script setup lang="ts">
  import {useExtendedUserStore} from "~/store/extendedeUserStore";

  const extendedUserStore = useExtendedUserStore()

  await extendedUserStore.fetchAllExtendedUsers(true)

  console.log(extendedUserStore.extendedUsers)
  console.log(extendedUserStore.extendedUserRoles)
</script>


<template>
    <div>
        <NuxtLayout>
            <NuxtPage/>
        </NuxtLayout>
    </div>
</template>
<script setup lang="ts">
  import {useExtendedUserStore} from "~/store/extendedUserStore";

  const extendedUserStore = useExtendedUserStore()

  await extendedUserStore.fetchAllExtendedUsers(true)

  console.log(extendedUserStore.extendedUsers)
  console.log(extendedUserStore.extendedUserRoles)
</script>

<style scoped>

</style>

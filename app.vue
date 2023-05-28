<template>
  <div>
    <NuxtWelcome />
  </div>
</template>
<script setup lang="ts">
  import supabase from "~/supabase/client";

  const { data, error } = await supabase
    .from("balloons")
    .select()
  console.log(data)
  console.log(error)
</script>


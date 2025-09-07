<script setup lang="ts">
import type { Users } from '@/types/components-design/UserData.ts'
import UserListItem from "./UserListItem.vue"

defineProps<{
  users: Users
}>()
</script>
<template>
  <div class="overflow-x-auto ">
    <table class="table table-auto table-zebra">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        <UserListItem v-for="user in users" :key="user.id" :user="user" />
      </tbody>
    </table>
  </div>
</template>
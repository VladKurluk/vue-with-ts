<script setup lang="ts">
import { ref, computed } from "vue"
import type { Users } from '@/types/components-design/UserData.ts'

import UserListContent from "./UserListContent.vue"
import UserListEmpty from "./UserListEmpty.vue"

const { users = []} = defineProps<{
  users: Users
}>()
const filter = ref('');
const filteredUsers = computed(() => {
    return users.filter(user => {
        return user.name.toLowerCase().includes(filter.value.toLowerCase());
    });
});
</script>
<template>
  <div class="flex gap-3">
    <div class="w-full">
      <!-- User List Controls -->
      <div class="mb-4 w-56">
        <input
          v-model="filter"
          type="text"
          placeholder="Filter users by name"
          class="input input-bordered w-full"
        />
      </div>

      <UserListContent v-if="filteredUsers.length" :users="filteredUsers" />

      <!-- User List Empty -->
      <UserListEmpty v-else />
    </div>
  </div>
</template>
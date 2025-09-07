<script setup lang="ts">
import type { User } from '@/types/components-design/UserData.ts'

defineProps<{
  user: User
}>()
</script>
<template>
  <tr>
    <td>{{ user.name }}</td>
    <td>{{ user.email }}</td>
    <td>{{ user.role }}</td>
  </tr>
</template>
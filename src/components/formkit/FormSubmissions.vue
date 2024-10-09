<template>
  <CardComponent class="my-10">
    <h2>Login</h2>
    <FormKit
      type="form"
      :value="formData"
      :actions="false"
      @submit="handleSubmit"
    >
      <template #default="{ state }">
        <FormKit type="text" label="Username" name="username" />
        <FormKit type="password" label="Password" name="password" />
        <button :disabled="state.loading">
          {{ state.loading ? 'Logging in...' : 'Login' }}
        </button>
      </template>
    </FormKit>
  </CardComponent>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { wait } from "@/helpers/formkit/wait";
import CardComponent from '@/components/ui/CardComponent.vue';

interface IFormData {
  username: string;
  password: string;
};

const formData = ref<IFormData>({
  username: 'danielkelly.io',
  password: ''
});

const handleSubmit = async (data: IFormData) => {
  await wait(3000);
  console.log(data);
}
</script>

<style lang="postcss" scoped>
button {
  @apply inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800;
}
</style>
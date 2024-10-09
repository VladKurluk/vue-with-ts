<template>
  <CardComponent class="my-10">
    <h2>Login</h2>
    <FormKit
      type="form"
      :value="formData"
      @submit="handleSubmit"
    >
      <FormKit type="text" label="Username" name="username" />
      <FormKit type="password" label="Password" name="password" />
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

<style scoped>

</style>
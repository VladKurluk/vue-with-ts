<template>
  <CardComponent class="my-10">
    <h2>Form from schema</h2>
    <FormKitSchema
      :data="{
        formData,
        attrs: {
          onSubmit: handleSubmit
        }
      }"
      :schema="[
        {
          $formkit: 'form',
          submitLabel: 'Login',
          value: '$formData',
          bind: '$attrs',
          children: [
            {
              $el: 'h2',
              children: 'Login'
            },
            {
              $formkit: 'text',
              label: 'Username',
              name: 'username',
              validation: '(500)username_is_unique',
              help: 'Please fill out your username',
            },
            {
              $formkit: 'password',
              label: 'Password',
              name: 'password',
              validation: 'required'
            },
            {
              $formkit: 'multiSelect',
              label: 'Framework',
              value: 'Vue.js',
              options: ['Vue.js', 'React', 'Svelte']
            }
          ]
        },
        
      ]"
    />
  </CardComponent>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { FormKitSchema } from "@formkit/vue";
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
};
</script>

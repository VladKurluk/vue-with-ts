<template>
  <CardComponent class="my-10">
    <h2>Form validation witn Zod</h2>
    <FormKit type="form" :plugins="[zodPlugin]" @submit="submitHandler">
      <FormKit type="group" name="personalInfo">
        <FormKit
          validation="required|length:3,25"
          validation-visibility="live"
          type="text"
          name="firstName"
          label="First Name"
        />
        <FormKit
          validation="required|length:3,25"
          type="text"
          name="lastName"
          label="Last Name"
        />
      </FormKit>
      <FormKit
        validation="required|email"
        type="text"
        name="email"
        label="Your email"
      />
      <FormKit
        validation="required|min:2"
        type="checkbox"
        name="arrayMin"
        label="Zod features"
        :options="['Validation', 'Type-Safety', 'Reusability']"
      />
    </FormKit>
  </CardComponent>
</template>

<script setup lang="ts">
import { createZodPlugin } from '@formkit/zod'
import { z } from 'zod'
import CardComponent from '@/components/ui/CardComponent.vue';

const zodSchema = z.object({
  personalInfo: z.object({
    firstName: z.string().min(3).max(25),
    lastName: z.string().min(3).max(25),
  }),
  email: z.string().email(),
  arrayMin: z.string().array().min(2),
})

const [zodPlugin, submitHandler] = createZodPlugin(
  zodSchema,
  async (formData) => {
    // fake submit handler, but this is where you
    // do something with your valid data.
    await new Promise((r) => setTimeout(r, 2000))
    alert('Form was submitted!')
    console.log(formData)
  }
)
</script>

<style scoped>

</style>
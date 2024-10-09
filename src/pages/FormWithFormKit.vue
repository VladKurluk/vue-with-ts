<template>
  <GetStarted />
  <CardComponent class="mt-10">
    <h2>Forms</h2>
    <FormKit
      label="Username"
      name="username"
      type="text"
      help="Pick a new username"
      validation="required|matches:/^@[a-zA-Z]+$/|length:5"
      value="@useFormKit"
      prefix-icon="avatarMan"
      inner-class="mycustom-inner"
    >
      <template #label="context">
        <p v-for="(key, index) in Object.keys(context)">
          {{ index }} - {{ key }}
        </p>
        {{ context.label }}
        ?
        <span>{{ context.help }}</span>
      </template>
      <template #help></template>
    </FormKit>
  </CardComponent>
</template>

<script setup lang="ts">
import GetStarted from '@/components/formkit/GetStarted.vue';
import CardComponent from '@/components/ui/CardComponent.vue';
</script>

<style scoped>

</style>
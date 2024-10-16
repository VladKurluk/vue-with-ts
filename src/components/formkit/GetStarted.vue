<template>
  <CardComponent class="mb-10">
    <h2>First Field</h2>
    <FormKit
      name="first"
      id="first"
      type="text"
      label="Name"
      help="Your full name"
      placeholder="“Jon Doe”"
      value="Vlad"
      validation="length:2,10"
      validation-visibility="live"
      :plugins="[modifyInputValue]"
    />
  </CardComponent>
  <CardComponent>
    <h2>First Form</h2>
    <FormKit
      type="form"
      :plugins="[castRangeToNumber]"
      submit-label="Create Character"
      @submit="createCharacter"
      #default="{ value }"
    >
      <FormKit
        type="text"
        name="name"
        id="name"
        validation="required|not:Admin"
        label="Name"
        help="Enter your character's full name"
        placeholder="“Scarlet Sword”"
      />
      <FormKit
        type="select"
        label="Class"
        name="class"
        id="class"
        placeholder="Select a class"
        :options="['Warrior', 'Mage', 'Assassin']"
        :plugins="[updateAttributesPlugin]"
      />
      <FormKit
        type="group"
        name="attributes"
        id="attributes"
        :validation-rules="{ max_sum }"
        validation-visibility="live"
        validation="max_sum"
        :validation-messages="{
          max_sum: ({ name }) => `${name} has exceeded the max budget of 20. Your character can't be that strong!`,
        }"
        #default="{ value, id, messages, fns, classes }"
      >
        <FormKit
          type="range"
          name="strength"
          id="strength"
          label="Strength"
          value="5"
          validation="min:1|max:9"
          validation-visibility="live"
          min="1"
          max="10"
          step="1"
          help="How many strength points should this character have?"
        />
        <FormKit
          type="range"
          name="skill"
          id="skill"
          validation="required|max:10"
          label="Skill"
          value="5"
          min="1"
          max="10"
          step="1"
          help="How many skill points should this character have?"
        />
        <!-- By default groups do not show validation messages, so we need to add it manually -->
        <ul :class="classes.messages" v-if="fns.length(messages)">
          <li 
            v-for="message in messages"
            :key="message.key"
            :class="classes.message"
            :id="`${id}-${message.key}`"
            :data-message-type="message.type"
          >
            {{ message.value }}
          </li>
        </ul>
        <!-- Conditional rendering is simple, just get the value and a property of the object -->
        <p v-if="value?.strength === 1 
          && value?.skill === 1"
          key="easter-egg-uuid"
        >
          <em><small class="easter-egg">Are you trying to make the game harder for yourself?</small></em>
        </p>
      </FormKit>
      <pre wrap>{{ value }}</pre>
    </FormKit>
  </CardComponent>
</template>

<script setup lang="ts">
import { castRangeToNumber, updateAttributesPlugin } from '@/helpers/formkit/plugin';
import CardComponent from '@/components/ui/CardComponent.vue';
import type { FormKitNode } from "@formkit/core";

type FirstFormAttrs = {
  strength: string | number;
  skill: string | number;
};

interface FirstFormValues {
  name: string;
  class?: string;
  attributes: FirstFormAttrs;
}

const modifyInputValue = (node: FormKitNode): void => {
  node.hook.input((value: string, next: (value: string) => void) => {
    if (value.length === 1) {
      return next(`###_${value}`);
    }

    return value;
  });
};

const createCharacter = async (fields: FirstFormValues) => {
  await new Promise((r) => setTimeout(r, 1000));
  alert(JSON.stringify(fields));
  console.log(fields);
};

const max_sum = (node:FormKitNode, max: number = 15): boolean => {
  if (!node || !node.value || typeof node.value !== 'object') return false;

  return Object.values(node.value).reduce((a, b) => a + b) <= max
}
</script>

<style scoped>

</style>
<template>
  <Transition
    @before-enter="onBeforeEnter"
    @enter="onEnter"
    @leave="onLeave"
    :css="false"
  >
    <slot></slot>
  </Transition>
</template>


<script lang="ts" setup>
import gsap from "gsap";

function onBeforeEnter(el: Element): void {
  gsap.set(el, {
    scaleX: 0.25,
    scaleY: 0.25,
    opacity: 1,
  });
}
function onEnter(el: Element, done: () => void): void {
  gsap.to(el, {
    duration: 1,
    scaleX: 1,
    scaleY: 1,
    opacity: 1,
    ease: "elastic.inOut(2.5, 1)",
    onComplete: done,
  });
}
function onLeave(el: Element, done: () => void): void {
  gsap.to(el, {
    duration: 1,
    scaleX: 0,
    scaleY: 0,
    opacity: 0.2,
    ease: "elastic.inOut(2.5, 1)",
    onComplete: done,
  });
}
</script>
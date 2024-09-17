<template>
  <div ref="jsonContainer"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import JsonViewer from '@json-viewer/core';

const props = defineProps({
  data: {
    type: [Object, Array],
    required: true,
  },
  method: {
    type: String,
    default: 'GET',
  },
  baseUrl: {
    type: String,
    default: '',
  },
  url: {
    type: String,
    default: '',
  },
  showHeader: {
    type: Boolean,
    default: true,
  },
  theme: {
    type: String,
    default: 'dark',
  },
  expand: {
    type: Boolean,
    default: false,
  },
});

const jsonContainer = ref<HTMLElement | null>(null);
let jsonViewer: JsonViewer | null = null;

onMounted(() => {
  jsonViewer = new JsonViewer({
    container: jsonContainer.value,
    data: props.data,
    method: props.method,
    baseUrl: props.baseUrl,
    url: props.url,
    showHeader: props.showHeader,
    theme: props.theme,
    expand: props.expand,
  });
});

watch(() => props.data, (newValue: Object | Array<[]>) => {
  if (jsonViewer) {
    jsonViewer.options.data = newValue;
    jsonViewer.render(newValue);
  }
});
</script>

<style scoped>
</style>

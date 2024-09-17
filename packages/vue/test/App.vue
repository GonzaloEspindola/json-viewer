<script setup lang="ts">
import JsonViewer from '../src/JsonViewerVue.vue';

const data= [
    {
        name: 'hola'
    },
    {
        name: 'hola'
    }
]
</script>

<template>
    <JsonViewer
          method= "GET"
          baseUrl= "http://localhost:3000"
          url= "docs"
          theme= "dark"
          :showHeader= true
          :expand= true
          :data="data"
    />
</template>
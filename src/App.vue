<template>
  <div id="app">
    <textarea v-model="text" ref="textarea" autofocus></textarea>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class App extends Vue {

  get text(): void {
    return this.$store.state.text
  }

  set text(text) {
    this.$store.commit('setText', text);
  }
}
</script>

<style>

  * {
    box-sizing: border-box;
    outline: 0;
  }

  html, body, #app {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  textarea {
    display: block;
    width: 100%;
    height: 100%;
    resize: none;
    padding: 20px;
    border: none;
    font: 1em -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

</style>
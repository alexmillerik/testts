<template>
  <div id="app">
    <textarea v-model="text" ref="textarea" autofocus @blur="$event.target.focus()" @keydown.ctrl.83.prevent="saveAsFile"></textarea>
    <a ref="downloader" v-show="false"></a>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Ref } from 'vue-property-decorator';

@Component
export default class App extends Vue {

  @Ref('downloader') readonly downloader!: HTMLAnchorElement; 

  get text(): string {
    return this.$store.state.text
  }

  set text(text) {
    this.$store.commit('setText', text);
  }

  saveAsFile(data: object) {

    this.downloader.href = URL.createObjectURL(new Blob([this.text], {type: 'text/plain'}));
    this.downloader.download = 'myText.txt';

    this.downloader.click();

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
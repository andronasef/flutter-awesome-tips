<script>
  import { fade } from 'svelte/transition'
  export let markedDown
</script>

<div
  class="flex flex-col h-full  space-y-5  w-full p-10 px-[5%] items-center justify-center md:text-left md:px-[20%]"
>
  {@html markedDown}

  <style lang="scss" scoped>
    @import 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/styles/github-dark-dimmed.min.css';
    p > a {
      color: #4169e1;
    }

    .end {
      @apply flex-grow text-center text-2xl md:text-4xl;
    }
    h1 {
      @apply text-2xl font-semibold;
    }
    h2 {
      @apply text-xl font-semibold;
    }
    p {
      @apply text-lg opacity-90;
    }

    code,
    pre,
    .hljs {
      @apply text-left bg-secondbg w-full  text-base p-[2.5px] text-white rounded whitespace-pre-wrap;
    }
    pre {
      @apply p-2;
    }
  </style>
</div>

<style></style>

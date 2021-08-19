<script>
  export let markedDown
  // import SvelteMarkdown from 'svelte-markdown'
</script>

<div
  class="flex flex-col h-full  space-y-5  w-full p-10 px-[5%] items-center justify-center md:text-left md:px-[20%]"
>
  {@html markedDown}
  <!-- <SvelteMarkdown {source} /> -->
  <style lang="scss">
    @import 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/styles/github-dark-dimmed.min.css';

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
      @apply text-left bg-secondbg w-full text-base p-[2.5px] text-white rounded;
    }
    pre {
      @apply p-2 whitespace-pre-wrap;
    }
  </style>
  <script></script>
</div>

<style lang="scss">
</style>

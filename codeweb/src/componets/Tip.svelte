<script lang="typescript">
  // import hljs from 'highlight.js/lib/core'
  // import dart from 'highlight.js/lib/languages/dart'
  // import { onMount } from 'svelte'
  // hljs.registerLanguage('dart', dart)
  export let mysource

  // onMount(() => )
</script>

<div
  class="flex flex-col h-full space-y-5 w-full px-[15%] pt-[5%] pb-10 items-center justify-center"
>
  {@html mysource}
  <style lang="scss">
    .end {
      @apply text-center text-4xl;
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
    pre {
      @apply bg-secondbg text-base p-[2.5px] text-white rounded;
    }
    pre {
      @apply p-2;
    }
  </style>
  <script></script>
</div>

<style lang="scss">
</style>

<script>
  export let source
  // import SvelteMarkdown from 'svelte-markdown'
</script>

<div
  class="flex flex-col space-y-5 w-full p-10 px-[5%] items-center justify-center md:px-[20%]"
>
{@html source}
  <!-- <SvelteMarkdown {source} /> -->
  <style lang="scss">
    .end {
      @apply text-center  text-2xl md:text-4xl;
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
      @apply bg-secondbg w-full text-base p-[2.5px] text-white rounded;
    }
    pre {
      @apply p-2 whitespace-pre-wrap;
    }
  </style>
  <script></script>
</div>

<style lang="scss">
</style>

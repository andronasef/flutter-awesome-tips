<script lang="typescript">
  export let mysource
</script>

<div
  class="flex flex-col h-full space-y-5 w-full px-[5%] pt-[5%] pb-10 items-center justify-center md:px-[15%]"
>
  {@html mysource}
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
      @apply p-2;
      white-space: pre-wrap; /* Since CSS 2.1 */
      white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
      white-space: -pre-wrap; /* Opera 4-6 */
      white-space: -o-pre-wrap; /* Opera 7 */
      word-wrap: break-word; /* Internet Explorer 5.5+ */
    }
  </style>
  <script></script>
</div>

<style lang="scss">
</style>

<script lang="ts">
  import { onMount } from 'svelte'
  import FAB from './componets/FAB.svelte'
  import Header from './componets/Header.svelte'
  import Tip from './componets/Tip.svelte'
  import Footer from './componets/Footer.svelte'
  import { slide } from 'svelte/transition'

  // Import markdown-hljs library
  import Markdown from 'markdown-hljs'

  // Convert Markdown 2 Html
  let count =
    localStorage.getItem('count') === null
      ? 1
      : parseInt(localStorage.getItem('count'))
  let tipsCount
  let markdown = 'Loading'
  $: markedDown = Markdown(markdown)

  onMount(async () => {
    await fetch('./tips.json')
      .then((r) => r.json())
      .then((json) => (tipsCount = Object.keys(json).length + 1))
    console.log(tipsCount)
    mark2html()
  })
  function mark2html() {
    fetch(`./tips/${count}.md`)
      .then((r) => r.text())
      .then((mark) => {
        markdown = mark
      })
  }

  function nextOrBefore(e) {
    if (!e.detail.next) count++
    else count--
    mark2html()
    // }
    localStorage.setItem('count', count.toString())
  }
</script>

<main class="flex flex-col h-full">
  <Header />
  {#if count != tipsCount - 1}
    <FAB on:next={nextOrBefore} />
  {/if}
  {#if count >= 2}
    <FAB on:next={nextOrBefore} before={true} />
  {/if}
  <Tip {markedDown} />
  <!-- <Footer /> -->
</main>

<style lang="scss">
</style>

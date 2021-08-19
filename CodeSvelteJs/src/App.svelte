<script>
  import { onMount } from 'svelte'
  import FAB from './componets/FAB.svelte'
  import Header from './componets/Header.svelte'
  import Tip from './componets/Tip.svelte'
  import Footer from './componets/Footer.svelte'

  // Import markdown-hljs library
  import Markdown from 'markdown-hljs'

  // Convert Markdown 2 Html
  let count =
    localStorage.getItem('count') === null
      ? 1
      : parseInt(localStorage.getItem('count'))
  let tipsCount = 100
  let markdown = 'Loading'
  $: markedDown = Markdown(markdown)

  onMount(() => {
    mark2html()
  })
  function mark2html() {
    fetch(`/tips/${count}.md`)
      .then((r) => r.text())
      .then((mark) => {
        markdown = mark
      })
  }

  function next() {
    if (count == tipsCount)
      markedDown =
        '<p class="end">It Not The End. New Tips Will Be Published Soon</p>'
    else {
      count++
      mark2html()
    }
    localStorage.setItem('count', count.toString())
  }
</script>

<main class="flex flex-col h-full">
  <Header />
  <FAB on:next={next} />
  <Tip {markedDown} />
  <!-- <Footer /> -->
</main>

<style lang="scss">
</style>

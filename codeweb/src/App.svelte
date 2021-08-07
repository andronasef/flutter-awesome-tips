<script lang="typescript">
  import { onMount } from 'svelte'

  import FAB from './componets/FAB.svelte'
  import Header from './componets/Header.svelte'
  import Tip from './componets/Tip.svelte'

  let mysource = 'Loading'
  const counts = 2
  let count =
    localStorage.getItem('count') === null
      ? 1
      : parseInt(localStorage.getItem('count'))
  onMount(() => {
    fetch(`/tips/${count}.html`)
      .then((r) => r.text())
      .then((mark) => (mysource = mark))
  })

  function next() {
    if (count == counts)
      mysource =
        '<p class="end">It Not The End. New Tips Will Be Published Soon</p>'
    else {
      count++
      fetch(`/tips/${count}.html`)
        .then((r) => r.text())
        .then((tip) => (mysource = tip))
    }
    localStorage.setItem('count', count.toString())
  }
</script>

<main class="flex flex-col">
  <Header />
  <FAB on:next={next} />
  <Tip {mysource} />
</main>

<style lang="scss">
</style>

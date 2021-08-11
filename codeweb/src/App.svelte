<script lang="typescript">
  import { onMount } from 'svelte'

  import FAB from './componets/FAB.svelte'
  import Header from './componets/Header.svelte'
  import Tip from './componets/Tip.svelte'

  let html = 'Loading'
  onMount(() => {
    fetch(
      `https://github.com/andronasef/FlutterAwesomeTips/raw/main/tips/${count}.md`
    )
      .then((r) => r.text())
      .then((mark) =>
        fetch('https://api.github.com/markdown', {
          headers: {
            accept: '*/*',
            'accept-language': 'en-US,en;q=0.9',
            'content-type': 'application/json',
          },
          referrerPolicy: 'strict-origin-when-cross-origin',
          body: `{"mode":"markdown","text":${JSON.stringify(mark)}}`,
          method: 'POST',
          mode: 'cors',
          credentials: 'omit',
        })
          .then((r) => r.text())
          .then((rhtml) => (html = rhtml))
      )
  })

  const counts = 2
  let count =
    localStorage.getItem('count') === null
      ? 1
      : parseInt(localStorage.getItem('count'))
  onMount(() => {})

  function next() {
    if (count == counts)
      html =
        '<p class="end">It Not The End. New Tips Will Be Published Soon</p>'
    else {
      count++
      fetch(`tips/${count}.html`)
        .then((r) => r.text())
        .then((tip) => (html = tip))
    }
    localStorage.setItem('count', count.toString())
  }
</script>

<main class="flex flex-col">
  <Header />
  <FAB on:next{next} />
  <Tip {html} />
</main>

<style lang="scss">
</style>

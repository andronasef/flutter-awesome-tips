<script lang="typescript">
  import { onMount } from 'svelte'

  import FAB from './componets/FAB.svelte'
  import Header from './componets/Header.svelte'
  import Tip from './componets/Tip.svelte'

  let source = '# Loading'

  function mark2html() {
    fetch(`/tips/${count}.md`)
      .then((r) => r.text())
      .then(
        (mark) => (source = mark)
        // fetch('https://api.github.com/markdown', {
        //   headers: {
        //     accept: '*/*',
        //     'accept-language': 'en-US,en;q=0.9',
        //     'content-type': 'application/json',
        //   },
        //   referrerPolicy: 'strict-origin-when-cross-origin',
        //   body: `{"mode":"markdown","text":${JSON.stringify(mark)}}`,
        //   method: 'POST',
        //   mode: 'cors',
        //   credentials: 'omit',
        // })
        //   .then((r) => r.text())
        //   .then((rhtml) => (html = rhtml))
      )
  }
  onMount(() => {
    mark2html()
  })

  let count =
    localStorage.getItem('count') === null
      ? 1
      : parseInt(localStorage.getItem('count'))
  const counts = 2

  function next() {
    if (count == counts)
      source = '# It Not The End. New Tips Will Be Published Soon'
    else {
      count++
      mark2html()
    }
    localStorage.setItem('count', count.toString())
  }
</script>

<main class="flex flex-col">
  <Header />
  <FAB on:next={next} />
  <Tip {source} />
</main>

<style lang="scss">
</style>

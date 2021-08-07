<script lang="ts">
  import Icon from '@iconify/svelte'

  let links = [
    ['Submit Tip', 'https://github.com/andronasef/FlutterAwesomeTips/issues'],
    // ['All Tips', '/#'],
  ]
  // let iconLinks = [
  //   ['Submit Tip', '/#'],
  //   ['All Tips', '/#'],
  // ]
</script>

<header class="flex h-[70px] px-5 text-white/85 items-center">
  <img
    src="flutterwhite.svg"
    alt="Flutter Logo"
    class="h-9 mr-4 transform transition ease-in-out w-9 rotate-0 duration-500 hover:rotate-360"
  />
  <h1 class="font-extrabold text-white text-xl md:text-2xl">Flutter Tips</h1>
  <span class="ml-auto" />
  <div class="space-x-3 text-lg hidden md:flex">
    {#each links as link}
      <a class="transition-all hover:text-white" href={link[1]}>{link[0]}</a>
    {/each}
  </div>
  <div class="space-x-1 mt-2 ml-4 text-2xl">
    <a
      href="https://github.com/andronasef/FlutterAwesomeTips"
      class="transition-all visible md:hidden hover:text-white"
    >
      <Icon icon="ic:baseline-add" />
    </a>
    <a
      href="https://github.com/andronasef/FlutterAwesomeTips"
      class="transition-all hover:text-white"
    >
      <Icon icon="mdi:star" />
    </a>
    <a
      href="https://github.com/andronasef/FlutterAwesomeTips"
      class="transition-all hover:text-white"
    >
      <Icon icon="uim:github-alt" />
    </a>
  </div>
</header>

<style lang="scss">
</style>

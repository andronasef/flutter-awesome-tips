<script lang="ts">
  import Icon from '@iconify/svelte'

  let links = [
    ['Submit Tip', 'https://github.com/andronasef/FlutterAwesomeTips/issues'],
    // ['All Tips', '/#'],
  ]
  let icons = [
    [
      'ic:baseline-add',
      'https://github.com/andronasef/FlutterAwesomeTips/issues',
    ],
    ['mdi:star', 'https://github.com/andronasef/FlutterAwesomeTips'],
    ['uim:github-alt', 'https://github.com/andronasef/FlutterAwesomeTips'],
  ]
</script>

<header class="flex h-[80px] px-5 text-white/85 items-center">
  <a href="/" class="flex">
    <img
      src="flutterwhite.svg"
      alt="Flutter Logo"
      class="h-9 mr-4 transform transition ease-in-out w-9 rotate-0 duration-500 hover:rotate-360"
    />
    <h1 class="font-extrabold text-white text-xl md:text-2xl">Flutter Tips</h1>
  </a>
  <span class="ml-auto" />
  <!-- <div class="space-x-3 text-lg hidden md:flex">
    {#each links as link}
      <a class="transition-all hover:text-white" href={link[1]}>{link[0]}</a>
    {/each}
  </div> -->
  <div class="space-x-1 mt-2 ml-4 text-[27.5px]">
    {#each icons as icon}
      <a href={icon[1]}>
        <Icon
          icon={icon[0]}
          class="transform transition-all hover:(scale-125) active:scale-95"
        />
      </a>
    {/each}
  </div>
</header>

<style lang="scss">
</style>

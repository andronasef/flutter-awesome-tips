<script>
  import Icon from '@iconify/svelte'
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()

  function next() {
    dispatch('next', { next: true })
  }
</script>

<a
  on:click={next}
  href="/#"
  class="bg-secondbg rounded-full h-13 text-white text-center transform transition right-5 bottom-5 shadow-2xl text-4xl w-13 fixed hover:(scale-115) active:scale-90"
>
  <Icon icon="ic:round-navigate-next" class="mt-1.5" />
</a>

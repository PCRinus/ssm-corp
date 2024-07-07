<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
</script>

<div class="grid grid-cols-2 gap-4">
  <Card.Root class="flex flex-col justify-center">
    <Card.Header class="text-center">
      <Card.Title class="text-2xl">Clienți</Card.Title>
      <Card.Description class="text-xl">219</Card.Description>
    </Card.Header>
  </Card.Root>

  <Card.Root class="flex flex-col justify-center">
    <Card.Header class="text-center">
      <Card.Title class="text-2xl">Documentații realizate</Card.Title>
      <Card.Description class="text-2xl">180</Card.Description>
    </Card.Header>
  </Card.Root>

  <Card.Root class="flex flex-col justify-center">
    <Card.Header class="text-center">
      <Card.Title class="text-2xl">Ani de experiență</Card.Title>
      <Card.Description class="text-2xl">9</Card.Description>
    </Card.Header>
  </Card.Root>

  <Card.Root class="flex flex-col justify-center">
    <Card.Header class="text-center">
      <Card.Title class="text-2xl">Controale ITM si ISU</Card.Title>
      <Card.Description class="text-2xl">85</Card.Description>
    </Card.Header>
  </Card.Root>
</div>

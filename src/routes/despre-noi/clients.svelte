<script lang="ts">
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import Autoplay from 'embla-carousel-autoplay';
	import velocitaLogo from '$lib/assets/logos/velocita.svg';
	import proflexLogo from '$lib/assets/logos/proflex.png';
	import foxPainLogo from '$lib/assets/logos/fox-paint.png';
	import magneumHrLogo from '$lib/assets/logos/magneum-hr.webp';
</script>

<Carousel.Root
	class="mx-12"
	plugins={[
		Autoplay({
			delay: 5000
		})
	]}
>
	<Carousel.Content>
		<Carousel.Item>
			<Card.Root class="border-none bg-transparent">
				<Card.Content class="flex aspect-square items-center justify-center p-6">
					<span class="text-4xl font-semibold">
						<img class="aspect-square h-48" alt="The project logo" src={velocitaLogo} />
					</span>
				</Card.Content>
			</Card.Root>
		</Carousel.Item>
		<Carousel.Item>
			<Card.Root class="border-none bg-transparent">
				<Card.Content class="flex aspect-square items-center justify-center p-6">
					<span class="text-4xl font-semibold">
						<img class="" alt="The project logo" src={proflexLogo} />
					</span>
				</Card.Content>
			</Card.Root>
		</Carousel.Item>
		<Carousel.Item>
			<Card.Root class="border-none bg-transparent">
				<Card.Content class="flex aspect-square items-center justify-center p-6">
					<span class="text-4xl font-semibold">
						<img class="scale-125" alt="The project logo" src={foxPainLogo} />
					</span>
				</Card.Content>
			</Card.Root>
		</Carousel.Item>
		<Carousel.Item>
			<Card.Root class="border-none bg-transparent">
				<Card.Content class="flex aspect-square items-center justify-center p-6">
					<span class="text-4xl font-semibold">
						<img class="scale-125" alt="The project logo" src={magneumHrLogo} />
					</span>
				</Card.Content>
			</Card.Root>
		</Carousel.Item>
	</Carousel.Content>
	<Carousel.Previous />
	<Carousel.Next />
</Carousel.Root>

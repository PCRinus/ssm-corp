<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import Textarea from '@/components/ui/textarea/textarea.svelte';
	import { formSchema, type FormSchema } from './schema';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';

	export let data: SuperValidated<Infer<FormSchema>>;

	const form = superForm(data, {
		validators: zodClient(formSchema)
	});

	const { form: formData, enhance } = form;
</script>

<form method="POST" use:enhance>
	<Form.Field {form} name="fullName">
		<Form.Control let:attrs>
			<Form.Label>Nume</Form.Label>
			<Input {...attrs} bind:value={$formData.fullName} />
		</Form.Control>
		<Form.Description>Numele întreg</Form.Description>
		<Form.FieldErrors />
	</Form.Field>

	<Form.Field {form} name="company">
		<Form.Control let:attrs>
			<Form.Label>Companie</Form.Label>
			<Input {...attrs} bind:value={$formData.company} />
		</Form.Control>
		<Form.Description>Numele companiei dvs. (optional)</Form.Description>
		<Form.FieldErrors />
	</Form.Field>

	<Form.Field {form} name="email">
		<Form.Control let:attrs>
			<Form.Label>Email</Form.Label>
			<Input {...attrs} bind:value={$formData.email} />
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>

	<Form.Field {form} name="message">
		<Form.Control let:attrs>
			<Form.Label>Mesaj</Form.Label>
			<Textarea {...attrs} bind:value={$formData.message} />
		</Form.Control>
		<Form.Description
			>Mesajul dvs. ({$formData.message.length} din 500 de caractere, minim 5 caractere)</Form.Description
		>
		<Form.FieldErrors />
	</Form.Field>

	<Form.Button class="mt-4">Trimite</Form.Button>
</form>

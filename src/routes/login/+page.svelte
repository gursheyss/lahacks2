<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { toast } from 'svelte-sonner';
	let email = $state('');
	let { data } = $props();
	let { supabase } = $derived(data);

	async function signIn() {
		const { data, error: authError } = await supabase.auth.signInWithOtp({
			email: email,
			options: {
				emailRedirectTo: $page.url.origin + '/onboarding'
			}
		});

		console.log(data);

		if (authError) {
			toast.error(authError.message);
		} else {
			toast.success('Successfully logged in/signed up!');
			goto('/onboarding');
		}
	}
</script>

<div class="flex min-h-screen flex-col items-center justify-center bg-gray-100">
	<div class="w-80 rounded bg-white p-4 shadow-md">
		<h2 class="mb-4 text-center text-2xl font-bold">Log in</h2>
		<div class="mb-4">
			<label class="mb-2 block text-sm font-bold text-gray-700" for="email"> Email </label>
			<input
				class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
				type="email"
				bind:value={email}
				placeholder="Email"
				required
			/>
		</div>
		<div class="flex items-center justify-between">
			<button
				class="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
				type="button"
				onclick={signIn}
			>
				Log in
			</button>
		</div>
	</div>
</div>

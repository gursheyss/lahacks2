<script lang="ts">
	import { Textarea } from '$lib/components/ui/textarea/index';
	import { Label } from '$lib/components/ui/label/index.js';
	import Button from '$lib/components/ui/button/button.svelte';
	import { enhance } from '$app/forms';
</script>

<div class="container mx-auto px-4">
	<form method="POST" use:enhance>
		<div class="gap-8 md:grid md:grid-cols-2">
			<div>
				<Label for="diet">Dietary Preferences and Restrictions</Label>
				<p class="text-sm text-muted-foreground">
					Do you follow any specific diet or have any dietary restrictions? (e.g., vegetarian,
					vegan, gluten-free, kosher, halal)
				</p>
			</div>
			<div>
				<Textarea
					placeholder="I am a vegetarian and try to avoid dairy products whenever possible..."
					id="diet"
					class="h-24"
					required
					name="dietary"
				/>
			</div>

			<div>
				<Label for="culture">Cultural Background and Cuisine Preferences</Label>
				<p class="text-sm text-muted-foreground">
					What is your cultural background, and are there any traditional dishes or cuisines you
					enjoy or would like to incorporate into your meal plans?
				</p>
			</div>
			<div>
				<Textarea
					placeholder="I come from a large Mexican family, and I grew up eating a lot of traditional dishes like tacos, enchiladas, and tamales..."
					id="culture"
					class="h-24"
					required
					name="cultural"
				/>
			</div>

			<div>
				<Label for="budget">Financial Situation and Budget</Label>
				<p class="text-sm text-muted-foreground">
					What is your weekly or monthly budget for groceries, and are there any financial
					constraints we should consider when creating your meal plans?
				</p>
			</div>
			<div>
				<Textarea
					placeholder="As a single parent with two kids, I have a tight budget for groceries..."
					id="budget"
					class="h-24"
					required
					name="financial"
				/>
			</div>

			<div>
				<Label for="meal-prep">Meal Preparation and Cooking Preferences</Label>
				<p class="text-sm text-muted-foreground">
					Do you enjoy cooking, and how much time do you typically have available for meal
					preparation each day or week? Do you prefer batch cooking or meal prepping in advance, or
					do you like to cook fresh meals daily?
				</p>
			</div>
			<div>
				<Textarea
					placeholder="I enjoy cooking, but with my busy work schedule, I don't always have a lot of time during the week..."
					id="meal-prep"
					class="h-24"
					required
					name="preferences"
				/>
			</div>

			<div>
				<Label for="health">Health Goals and Motivations</Label>
				<p class="text-sm text-muted-foreground">
					Do you have any specific health goals or concerns that you would like to address through
					your diet? (e.g., weight management, improving energy levels, managing a chronic
					condition)
				</p>
			</div>
			<div>
				<Textarea
					placeholder="I have been struggling with my weight for years, and I was recently diagnosed with pre-diabetes..."
					id="health"
					class="h-24"
					required
					name="health"
				/>
			</div>
		</div>
		<div class="mt-8 text-right">
			<Button type="submit">Save and Continue</Button>
		</div>
	</form>
</div>

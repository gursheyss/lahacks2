import { error, redirect } from '@sveltejs/kit';

export const load = async ({ locals: { safeGetSession } }) => {
	const session = await safeGetSession();
	if (!session.user) {
		redirect(301, '/login');
	}
};

export const actions = {
	default: async ({ request, locals: { supabase, safeGetSession } }) => {
		const session = await safeGetSession();
		if (!session.user) {
			error(401, 'Unauthorized');
		}
		const formData = await request.formData();
		const data = Object.fromEntries(formData);
		console.log('User ID:', session.user.id);

		const { data: dbData, error: dbError } = await supabase
			.from('profiles')
			.update({
				dietary: String(data.dietary),
				cultural: String(data.cultural),
				financial: String(data.financial),
				preferences: String(data.preferences),
				health: String(data.health)
			})
			.eq('id', session.user.id)
			.select();

		console.log(dbData);

		if (dbError) {
			console.error('dberror: ' + dbError);
			error(500, dbError);
		}
	}
};

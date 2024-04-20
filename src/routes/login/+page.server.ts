import { redirect } from '@sveltejs/kit';
export const load = async ({ locals: { safeGetSession } }) => {
	const session = await safeGetSession();
	if (session.user) {
		redirect(301, '/onboarding');
	}
};

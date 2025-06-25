// app/lib/actions/signout.ts
'use server';

import { signOut } from '@/auth';

export async function handleSignOut() {
  await signOut({ redirectTo: '/' });
}

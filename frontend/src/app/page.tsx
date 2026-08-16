import { redirect } from 'next/navigation';

export default function HomePage() {
  // Automatically redirect users away from the default page
  // Straight to the login page (or whichever page you want to see first)
  redirect('/login');
}

'use client';

import AreaPost from '@/components/post/AreaPost';
import Header from '@/components/Header';
import { PostProvider } from '@/contexts/PostContext';
import { UserProvider } from '@/contexts/UserContext';

export default function Home() {
	return (
		<UserProvider>
			<div className='container mx-auto px-6'>
				<Header />

				<PostProvider>
					<AreaPost />
				</PostProvider>
			</div>
		</UserProvider>
	);
}

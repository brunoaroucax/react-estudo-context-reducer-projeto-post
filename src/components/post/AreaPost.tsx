import { useContext } from 'react';
import PostForm from './PostForm';
import PostItem from './PostItem';
import { PostContext } from '@/contexts/PostContext';
import { UserContext } from '@/contexts/UserContext';

const AreaPost = () => {
	const userContext = useContext(UserContext);
	const postContext = useContext(PostContext);

	return (
		<>
			{!userContext?.user && (
				<p className='mt-12 '>
					Você não tem permissão para acessar, faça o login
				</p>
			)}

			{userContext?.user && (
				<div className='my-12 flex flex-col gap-6 md:flex-row w-full'>
					<div className='md:w-[40%]'>
						<PostForm />
						<span className='bg-gray-800 px-2 rounded-full text-xs'>
							{postContext?.posts.length} posts
						</span>
					</div>

					{!postContext?.posts ||
						(postContext.posts.length === 0 && (
							<p className='text-center'>No momento não existe nenhum post</p>
						))}

					{postContext?.posts && (
						<div className='flex flex-col gap-4 flex-1'>
							{postContext?.posts.map((post) => (
								<PostItem key={post.id} post={post} />
							))}
						</div>
					)}
				</div>
			)}
		</>
	);
};

export default AreaPost;

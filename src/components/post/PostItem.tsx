import { Post } from '@/types/Post';
import trashIcon from '../../../public/bx-trash.svg';
import Image from 'next/image';
import { useContext } from 'react';
import { UserContext } from '@/contexts/UserContext';
import { PostContext } from '@/contexts/PostContext';

type Props = {
	post: Post;
};

const PostItem = ({ post }: Props) => {
	const userContext = useContext(UserContext);
	const postContext = useContext(PostContext);

	function handleButtonRemove(id: number) {
		if (post.author !== userContext?.user) return false;
		postContext?.dispatch({
			type: 'remove',
			payload: { id },
		});
	}

	return (
		<div className='flex flex-col gap-2 border border-gray-800 p-2 rounded'>
			<div className='flex flex-col'>
				<div className='flex gap-12 items-center border-b border-gray-800 py-2'>
					<small>{post.id}#</small>
					<h2 className='flex-1'> {post.title} </h2>

					{post.author === userContext?.user && (
						<button
							className='bg-gray-400 rounded-full p-1 transition-all hover:bg-gray-200'
							onClick={() => handleButtonRemove(post.id)}
						>
							<Image src={trashIcon} alt='Remover' width={18} />
						</button>
					)}
				</div>

				<div className='mt-4'>
					<p className='text-xs text-gray-400 leading-5'>{post.content}</p>
					<div className='flex justify-end'>
						<p className='text-xs mt-2 bg-blue-600 px-2 rounded-full inline '>
							{post.author}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PostItem;

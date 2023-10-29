import { PostContext } from '@/contexts/PostContext';
import { UserContext } from '@/contexts/UserContext';
import { FormEvent, useContext, useState } from 'react';

const PostForm = () => {
	const [titleField, setTitleField] = useState('');
	const [contentField, setContentField] = useState('');

	const postContext = useContext(PostContext);
	const userContex = useContext(UserContext);

	function handleSubmit(e: FormEvent) {
		e.preventDefault();
		if (!titleField && titleField.trim() === '') return false;
		if (!contentField && contentField.trim() === '') return false;
		if (!userContex?.user) return false;

		postContext?.dispatch({
			type: 'add',
			payload: {
				title: titleField.trim(),
				content: contentField.trim(),
				author: userContex?.user,
			},
		});
		setTitleField('');
		setContentField('');
	}

	return (
		<form
			onSubmit={(e) => handleSubmit(e)}
			action=''
			className='flex flex-col gap-2 border border-gray-800 p-2 rounded mb-2 w-full'
		>
			<input
				type='text'
				placeholder='Digite um titulo'
				className='p-2 outline-none text-gray-800 text-sm rounded border-2 border-white transition-all focus:border-2 focus:border-blue-500'
				value={titleField}
				onChange={(e) => setTitleField(e.target.value)}
			/>
			<textarea
				placeholder='Digite o conteudo'
				className='p-2 outline-none text-gray-800 text-sm rounded border-2 border-white transition-all focus:border-2 focus:border-blue-500'
				value={contentField}
				onChange={(e) => setContentField(e.target.value)}
				rows={5}
			/>
			<button className='w-full bg-blue-600 p-2 rounded text-sm transition-all hover:brightness-90 hover:transition-all'>
				Adicionar
			</button>
		</form>
	);
};

export default PostForm;

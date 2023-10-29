import { PostActions, postReducer } from '@/reducers/postReducer';
import { Post } from '@/types/Post';
import { title } from 'process';
import { Dispatch, ReactNode, createContext, useReducer } from 'react';

type PostContextType = {
	posts: Post[];
	dispatch: Dispatch<PostActions>;
};
export const PostContext = createContext<PostContextType | null>(null);

export const PostProvider = ({ children }: { children: ReactNode }) => {
	const [posts, dispatch] = useReducer(postReducer, []);
	// const [posts, setPost] = useState<Post[]>([]);

	// function addPost(data: Post) {
	// 	setPost([...posts, data]);
	// }

	return (
		<PostContext.Provider value={{ posts, dispatch }}>
			{children}
		</PostContext.Provider>
	);
};

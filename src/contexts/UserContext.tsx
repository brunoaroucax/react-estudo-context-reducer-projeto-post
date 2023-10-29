import { ReactNode, createContext, useState } from 'react';

type UserContextType = {
	user: string;
	setUser: (u: string) => void;
};

export const UserContext = createContext<UserContextType | null>(null);

type Props = {
	children: ReactNode;
};
export const UserProvider = ({ children }: Props) => {
	const [user, setUser] = useState('');
	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
};

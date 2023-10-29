import Image from 'next/image';
import logoImg from '../../public/logo.svg';
import { useContext, useState } from 'react';
import { UserContext } from '@/contexts/UserContext';

const Header = () => {
	const userContext = useContext(UserContext);

	function handleClickLogin() {
		const nameUser = window.prompt('nome do usuario: ');
		if (!nameUser) return false;
		userContext?.setUser(nameUser);
	}

	function handleClickSair() {
		userContext?.setUser('');
	}

	return (
		<header className='py-6 flex justify-between items-center border-b border-gray-700'>
			<div>
				<Image src={logoImg} alt='logo' height={30} />
			</div>
			<div>
				{!userContext?.user && (
					<button
						className='bg-gray-800 px-4 py-2 rounded-md'
						onClick={handleClickLogin}
					>
						Login
					</button>
				)}
				{userContext?.user && (
					<div className='flex gap-12'>
						<p>Olá {userContext?.user}</p>
						<button onClick={handleClickSair}>Sair</button>
					</div>
				)}
			</div>
		</header>
	);
};

export default Header;

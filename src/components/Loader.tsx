import React from 'react';

export default function Loader(): JSX.Element {
	return (
		<div
			className='flex justify-center h-screen items-center lg:text-6xl md:text-4xl sm:text-2xl
         text-lg font-extrabold text-slate-700'
		>
			Loading...
		</div>
	);
}

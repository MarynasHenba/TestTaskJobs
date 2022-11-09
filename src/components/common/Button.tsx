import React from 'react';
import { AiOutlineLeft } from 'react-icons/ai';

interface ButtonProps {
	buttonText: string;
	class: string;
	click?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button(props: ButtonProps): JSX.Element {
	return (
		<button type='button' className={props.class} onClick={props.click}>
			{props.buttonText === 'Return to job board' && (
				<AiOutlineLeft className=' mr-5' />
			)}
			{props.buttonText}
		</button>
	);
}

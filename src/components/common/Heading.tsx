import React, { Fragment } from 'react';
import { HiOutlineBookmark, HiShare } from 'react-icons/hi';

interface HeadingProps {
	text: string;
}

export default function Heading(props: HeadingProps): JSX.Element {
	return props.text === 'Job details' ? (
		<Fragment>
			<div className='border-b-2 flex justify-between lg:mb-10 md:mb-10 sm:mb-6 mb-6'>
				<h1 className='text-slate-700 text-3xl leading-9 tracking-wide mb-2'>
					Job details
				</h1>
				<div className='lg:flex md:flex sm:hidden hidden'>
					<p className='flex items-center mr-7'>
						<HiOutlineBookmark className='text-gray-700 mr-3' />
						<span className=' text-lg leading-6 tracking-tight'>
							{' '}
							Save to my list
						</span>
					</p>
					<p className='flex items-center '>
						<HiShare className='text-gray-700 mr-3' />{' '}
						<span className=' text-lg leading-6 tracking-tight'>Share</span>
					</p>
				</div>
			</div>
			<div className='lg:hidden md:hidden sm:flex flex mb-9'>
				<p className='flex items-center mr-7'>
					<HiOutlineBookmark className='text-gray-700 mr-3' />
					<span className=' text-lg leading-6 tracking-tight'>
						{' '}
						Save to my list
					</span>
				</p>
				<p className='flex items-center '>
					<HiShare className='text-gray-700 mr-3' />{' '}
					<span className=' text-lg leading-6 tracking-tight'>Share</span>
				</p>
			</div>
		</Fragment>
	) : (
		<div className=' border-b-2 mb-4'>
			<h1 className='text-slate-700 text-3xl leading-9 tracking-wide mb-2'>
				{props.text}
			</h1>
		</div>
	);
}

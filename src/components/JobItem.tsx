import React from 'react';
import moment from 'moment';
import { Job } from '../interfaces/Job';
import { Link } from 'react-router-dom';
import { HiOutlineBookmark } from 'react-icons/hi';
import { ImLocation } from 'react-icons/im';

interface JobItemProps {
	item: Job;
}

export default function JobItem({ item }: JobItemProps): JSX.Element {
	return (
		<div className='bg-white flex justify-between m-2 lg:p-6 md:p-6 sm:p-5 p-4 rounded-lg shadow-sm'>
			<div className='flex items-center lg:max-w-[700px] md:max-w-[600px] sm:max-w-[400px] lg:mr-9 md:mr-9 sm:mr-9 mr-0 flex-1'>
				<div className='lg:min-w-[85px] lh:min-h-[85px] md:min-w-[85px] md:min-h-[85px] sm:min-w-[85px] sm:min-h-[85px] min-w-[66px] min-h-[66px] lg:mr-7 md:mr-7 sm:mr-5 mr-3'>
					<img
						className='lg:w-[85px] lg:h-[85px] md:w-[85px] md:h-[85px] sm:w-[85px] sm:h-[85px] w-[66px] h-[66px] rounded-full'
						src={item.pictures[0]}
						alt='Photo'
					/>
				</div>
				<div className='w-full'>
					<div className='lg:hidden md:hidden sm:hidden flex justify-between items-center mb-2'>
						<p className='text-zinc-400 text-xs tracking-wide'>
							Posted {moment(item.createdAt).startOf('day').fromNow()}
						</p>
						<p>
							<HiOutlineBookmark />
						</p>
					</div>
					<h2 className='lg:text-xl md:text-xl sm:text-lg text-lg leading-6 mb-2 lg:font-bold md:font-bold sm:font-bold font-normal text-slate-700 tracking-tight'>
						<Link to={`/${item.id}`}>{item.title}</Link>
					</h2>
					<p className='text-base leading-6 mb-2 text-zinc-400 tracking-wide'>
						<span>{item.name}</span>
						{/* <span>{item.address}</span> */}
					</p>
					<p className='flex items-center'>
						<ImLocation className='text-zinc-400 mr-1' />
						<span className='leading-6 text-zinc-400 tracking-wide'>
							Vienna, Austria
						</span>
					</p>
				</div>
			</div>
			<div className='lg:flex md:flex sm:flex hidden flex-col justify-between items-end'>
				<p>
					<HiOutlineBookmark />
				</p>
				<p className='text-zinc-400 lg:text-base md:text-sm sm:text-xs tracking-wide'>
					Posted {moment(item.createdAt).startOf('day').fromNow()}
				</p>
			</div>
		</div>
	);
}

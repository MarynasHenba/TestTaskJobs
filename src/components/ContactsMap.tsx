import React from 'react';
import { Job } from '../interfaces/Job';
import { ImLocation } from 'react-icons/im';
// import { StaticGoogleMap, Marker } from 'react-static-google-map';

interface ContactsMapProps {
	item: Job;
}

export default function ContactsMap({ item }: ContactsMapProps): JSX.Element {
	// const API_KEY = 'YOUR_API_KEY';

	return (
		<section className='lg:w-[400px] md:w-[250px] sm:w-full w-full'>
			<div className='lg:hidden md:hidden sm:block block border-b-2 mb-6'>
				<h1 className='text-slate-700 text-3xl leading-9 tracking-wide mb-2'>
					Contacts
				</h1>
			</div>
			<div className='bg-[#2A3047] text-white py-8 px-16 rounded-md -mb-1 w-full'>
				<p className='text-xl leading-6 font-bold mb-2'>{item.name}</p>
				<p className='flex items-center mb-2 text-lg leading-6'>
					<ImLocation className='text-zinc-400 mr-1' />{' '}
					<span>{item.address}</span>
				</p>
				<p className='text-lg leading-6 mb-2'>{item.phone}</p>
				<p className='text-lg leading-6'>{item.email}</p>
			</div>
			{/* <div>
				<StaticGoogleMap
					size='400x200'
					className='img-fluid rounded-md lg:w-[400px] md:w-[250px] sm:w-full w-full'
					apiKey={API_KEY}
				>
					<Marker
						location={`${item.location.lat}, ${item.location.long}`}
						color='blue'
					/>
				</StaticGoogleMap>
			</div> */}
		</section>
	);
}

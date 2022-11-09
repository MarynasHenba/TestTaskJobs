import React, { useState, useEffect, Fragment } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import moment from 'moment';
import { Job } from '../interfaces/Job';
import { fetchData } from '../helpers/fetchData';
import Button from './common/Button';
import ContactsMap from './ContactsMap';
import Loader from './Loader';
import Heading from './common/Heading';

export default function JobInfo(): JSX.Element {
	const { jobId } = useParams();
	const [jobItem, setJobItem] = useState<Job[]>([]);
	const navigate = useNavigate();

	useEffect(() => {
		fetchData()
			.then((result: Job[]) => {
				const filteredData = result.filter((item) => {
					return item.id === jobId;
				});
				setJobItem(filteredData);
			})
			.catch((err) => console.log(err));
	}, [jobId]);

	return (
		<Fragment>
			{jobItem.length !== 0 ? (
				<main className='lg:container md:container sm:container xs:container container mx-auto pt-14 py-4'>
					<div className='lg:flex md:flex sm:block block pb-16 px-2'>
						<div className='lg:mr-12 md:mr-12 sm:mr-0 mr-0'>
							<section className='mb-8'>
								<Heading text='Job details' />
								<Button
									class='lg:block md:block sm:hidden hidden text-xs leading-4 rounded-lg uppercase text-white font-semibold bg-[#384564] py-4 px-8 mb-9'
									buttonText='Apply now'
								/>
								<div className='lg:flex md:flex sm:flex block justify-between'>
									<h2 className='lg:text-2xl md:text-2xl sm:text-lg text-lg leading-6 mb-2 font-bold text-slate-700 tracking-tight lg:mr-14 md:mr-12 sm:mr-6 mr-0'>
										{jobItem[0].title}
									</h2>
									<div className=' min-w-[130px] lg:mb-0 md:mb-0 sm:mb-2 mb-2'>
										<p className='lg:text-lg md:text-lg sm:text-lg text-base leading-6 lg:font-bold md:font-bold sm:font-bold font-normal text-slate-700 tracking-tight'>
											€ {jobItem[0].salary}
										</p>
										<p>Brutto, per year</p>
									</div>
								</div>
								<p className='text-zinc-400 lg:text-base md:text-sm sm:text-xs tracking-wide mb-2'>
									Posted {moment(jobItem[0].createdAt).startOf('day').fromNow()}
								</p>
								<div className='mb-8'>
									<p className=' text-lg leading-6 mb-8'>
										{jobItem[0].description.split(':')[0].slice(0, -17)}
									</p>
									<p className=' text-xl leading-7 font-bold mb-2'>
										Responsibilities:
									</p>
									<p className=' text-lg leading-6 mb-8'>
										{jobItem[0].description.split(':')[1].slice(1, -24)}
									</p>
									<ul className=' text-xl leading-7 font-bold mb-2'>
										Compensation & Benefits:
									</ul>
									<p className=' text-lg leading-6 mb-8'>
										{jobItem[0].description.split(':')[2].slice(1)}
									</p>
								</div>
								<Button
									class='block lg:mx-0 md:mx-0 sm:mx-auto mx-auto text-xs leading-4 rounded-lg uppercase text-white font-semibold bg-[#384564] py-4 px-8 mb-9'
									buttonText='Apply now'
								/>
							</section>
							<section className='mb-20'>
								<Heading text='Additional info' />
								<div className=' mb-6'>
									<h3 className=' text-lg leading-6 mb-3'>Employment type</h3>
									<ul className='flex items-center'>
										{jobItem[0].employment_type.map((item, i) => {
											return (
												<li
													className='text-base leading-4 py-4 px-14 bg-[#a1b1db] bg-opacity-30 border-2 border-[#55699e] rounded-md mr-2'
													key={i}
												>
													{item}
												</li>
											);
										})}
									</ul>
								</div>
								<div>
									<h3 className=' text-lg leading-6 mb-3'>Benefits</h3>
									<ul className='flex items-center'>
										{jobItem[0].benefits.map((item, i) => {
											return (
												<li
													className='text-base leading-4 py-4 px-14 bg-[#ffcf00] bg-opacity-10 border-2 border-[#FFCF00] rounded-md mr-2'
													key={i}
												>
													{item}
												</li>
											);
										})}
									</ul>
								</div>
							</section>
							<section className=' mb-16'>
								<Heading text='Attached images' />
								<div className='flex items-center'>
									{jobItem[0].pictures.map((item, i) => {
										return (
											<img
												className='lg:w-[200px] lg:h-[115px] md:w-[200px] md:h-[115px] sm:w-[200px] sm:h-[115px] w-[200px] h-[115px] mr-3 rounded-md'
												key={i}
												src={item}
												alt='Photo'
											/>
										);
									})}
								</div>
							</section>
						</div>
						<ContactsMap item={jobItem[0]} />
					</div>
					<Button
						class='lg:flex md:flex sm:hidden hidden items-center py-4 px-6 rounded-md bg-[#384564] bg-opacity-20'
						buttonText='Return to job board'
						click={() => navigate('/jobs')}
					/>
				</main>
			) : (
				<Loader />
			)}
		</Fragment>
	);
}

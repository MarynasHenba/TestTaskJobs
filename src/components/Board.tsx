import React, { Fragment, useEffect, useState } from 'react';
import { Job } from '../interfaces/Job';
import { fetchData } from '../helpers/fetchData';
import ReactPaginate from 'react-paginate';
import JobItem from './JobItem';
import Loader from './Loader';

export default function Board(): JSX.Element {
	const [data, setData] = useState<Job[]>([]);
	const [itemsPerPage] = useState<number>(5);
	const [itemOffset, setItemOffset] = useState<number>(0);
	const endOffset = itemOffset + itemsPerPage;
	const pageCount = Math.ceil(data.length / itemsPerPage);
	const currentItems = data.slice(itemOffset, endOffset);

	useEffect(() => {
		fetchData()
			.then((result) => {
				setData(result);
			})
			.catch((err) => console.log(err));
	}, []);

	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
	const handlePageClick = (e: { selected: number }) => {
		const newOffset = (e.selected * itemsPerPage) % data.length;
		setItemOffset(newOffset);
	};

	return (
		<Fragment>
			{data.length !== 0 ? (
				<div className='py-4 px-1'>
					<div className='lg:container mx-auto lg:p-4 md:p-4 sm:p-2 p-1 mb-4'>
						{currentItems.map((item) => {
							return <JobItem key={item.id} item={item} />;
						})}
					</div>
					<ReactPaginate
						className='flex items-center justify-center py-1 px-6 bg-white max-w-[200px] mx-auto rounded-md lg:text-xl lg:leading-6 md:text-xl md:leading-6 sm:text-base sm:leading-5 text-base leading-5 text-[#70778B]'
						breakLabel='...'
						previousLabel='<'
						nextLabel='>'
						onPageChange={handlePageClick}
						pageRangeDisplayed={5}
						pageCount={pageCount}
						pageClassName='p-2'
						pageLinkClassName='page-link'
						previousClassName='mr-3 py-3'
						nextClassName='ml-3 py-3'
						activeClassName='text-[#5876C5]'
					/>
				</div>
			) : (
				<Loader />
			)}
		</Fragment>
	);
}

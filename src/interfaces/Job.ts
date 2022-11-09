export interface Job {
	id: string;
	name: string;
	email: string;
	phone: string;
	title: string;
	description: string;
	employment_type: string[];
	benefits: string[];
	salary: string;
	pictures: string[];
	address: string;
	location: {
		lat: number;
		long: number;
	};
	createdAt: string;
	updatedAt: string;
}

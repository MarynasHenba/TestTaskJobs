// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const fetchData = async () => {
	const response = await fetch(
		'https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu'
	);
	const result = await response.json();
	return result;
};

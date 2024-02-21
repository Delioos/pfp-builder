'use client';

import { useEffect } from 'react';

const ErrorPage = ({ error }: { readonly error: Error }) => {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error);
	}, [error]);

	return (
		<div className="flex size-full min-h-[50vh] items-center justify-center text-center text-xl font-medium">
			<p>Oh no, something went wrong... maybe refresh?</p>
		</div>
	);
};

export default ErrorPage;

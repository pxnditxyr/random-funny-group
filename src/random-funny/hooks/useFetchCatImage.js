import { useState, useEffect } from 'react';
import { getFetchCatImage } from '../apis/getFetchCatImage';

export const useFetchCatImage = ( num ) => {
    const [ state, setState ] = useState({
		data: [],
		loading: true,
	});

	useEffect( () => {

		getFetchCatImage()
			.then( url => {
				setState({
					data: url,
					loading: false,
				});
			});

	}, [ num ]);

	return state;
};

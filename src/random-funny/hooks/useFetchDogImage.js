import { useState, useEffect } from 'react';
import { getFetchDogImage } from '../apis/getFetchDogImage';

export const useFetchDogImage = ( num ) => {
    const [ state, setState ] = useState({
        data: {},
        loading: true,
    });

    useEffect( () => {
        getFetchDogImage()
            .then( file => {
                setState({
                    data: file,
                    loading: false,
                });
            });
    }, [ num ] );

    return state;
}

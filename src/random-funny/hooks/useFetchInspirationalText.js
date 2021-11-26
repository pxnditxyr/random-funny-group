
import { useState, useEffect } from 'react';
import { getFetchInspirationalText } from '../apis/getFetchInspirationalText';

export const useFetchInspirationalText = ( num ) => {
    const [ state, setState ] = useState({
        data: {},
        loading: true,
    });

    useEffect( () => {
        getFetchInspirationalText()
            .then( data => {
                setState({
                    data: data,
                    loading: false,
                });
            });
    }, [ num ] );

    return state;
}

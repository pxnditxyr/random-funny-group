
import { useState, useEffect } from 'react';
import { getFetchFactText } from '../apis/getFetchFactText';

export const useFetchFactText = ( num ) => {
    const [ state, setState ] = useState({
        data: {},
        loading: true,
    });

    useEffect( () => {
        getFetchFactText()
            .then( text => {
                setState({
                    data: text,
                    loading: false,
                });
            });
    }, [ num ] );

    return state;
}

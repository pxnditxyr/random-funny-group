import { getRandomNumber } from './getRandomNumber';
import { useFetchCatImage } from '../hooks/useFetchCatImage';
import { useFetchDogImage } from '../hooks/useFetchDogImage';
import { useFetchFactText } from '../hooks/useFetchFactText';
import { useFetchInspirationalText } from '../hooks/useFetchInspirationalText';

export const getApiHook = ( api ) => {
    switch ( api ) {
        case 'cat':
            return useFetchCatImage;
        case 'dog':
            return useFetchDogImage;
        case 'fact':
            return useFetchFactText;
        case 'inspirational':
            return useFetchInspirationalText;
        case 'randomImage':
            if ( getRandomNumber() % 2 === 0 )
                return useFetchCatImage
            else
                return useFetchDogImage
        case 'randomText':
            if ( getRandomNumber() % 2 === 0 )
                return useFetchFactText
            else
                return useFetchInspirationalText

        default: return null;  
    }
}

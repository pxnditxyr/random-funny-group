import { Meme } from './Meme';
import { getApiHook } from '../../utils/getApiHook';

import '../../assets/styles/components/card/random-card.css';
import '../../assets/styles/components/card/buttons.css';
import { useEffect, useState } from 'react';

export const RandomCard = ({ apiImage, apiText }) => {

    const [ random, setRandom ] = useState( 0 );

    const { data : url, loadingImage } = getApiHook( apiImage )( random );
    const [ urlImage, setUrlImage ] = useState( "" );

    useEffect(() => {
        if ( apiImage === "cat" ) {
            setUrlImage( url.url );
        }
        else {
            if ( typeof url === 'string' )
                setUrlImage( url );
            else
                setUrlImage( url.url );
        }
    }, [ url ] );

    const { data : textApi, loadingText } = getApiHook( apiText )( random );
    const [ text, setText ] = useState( "" );

    useEffect(() => {
        if ( apiImage === "fact" ) {
            setText( textApi );
        }
        else {
            if ( typeof textApi === 'string' )
                setText( textApi );
            else
                setText( textApi[ 0 ] );
        }
    }, [ textApi ] );

    const handleSaveMeme = ( urlImage, altImage, text ) => {
        const memes = JSON.parse( localStorage.getItem( 'memes' ) ) || [];
        localStorage.setItem( 'memes', JSON.stringify(
            [
                {
                    id: memes.length + 1,
                    urlImage,
                    altImage,
                    text,
                },
                ...memes,
            ] 
        ));
    };
    
    return (
        <article className="card-random">
            <section className="card-random__header">
                <h3> Random Generate </h3>
            </section>

        {
            ( !loadingImage && !loadingText )
            ?
            <>
                <section className="card-random__body">
                <Meme
                    urlImage={ urlImage }
                    altImage={ apiImage }
                    text={ text }
                />

                </section>
                <section className="card-random__footer">

                    <button 
                        className="btn-random"
                        onClick={ () => setRandom( random + 1 ) }
                        >
                        Generate
                    </button>

                    <button 
                        className="btn-save"
                        onClick={ () => handleSaveMeme( urlImage, apiImage, text ) }
                    >
                        Save
                    </button>
                </section>
            </>
            : <span className="loading"> Loading...</span>
        }
        </article>
    );
};

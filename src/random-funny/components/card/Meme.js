import { useCallback, useRef } from 'react';
import { useCapture } from 'react-capture';

import { MemeHeader } from './MemeHeader';
import { MemeBody } from './MemeBody';

import '../../assets/styles/components/card/meme.css';

export const Meme = ({ urlImage, altImage, text, myMeme }) => {

    const { snap } = useCapture();
    const memeElement = useRef( null );

    const handleDownload = useCallback( () => {
        snap( memeElement, { file: "random-meme.png" } );
    }, [ snap, memeElement ] );

    return (
        <div className="meme-container">
            <article className="card" ref={ memeElement }>
                <MemeHeader urlImage={ urlImage } altImage={ altImage } />
                <MemeBody text={ text } />
                
            </article>
            {
                myMeme &&
                <button 
                    className="btn-save"
                    onClick={ handleDownload }
                >
                    Download
                </button>
            }
        </div>
    );
};

import { Meme } from '../card/Meme';

import '../../assets/styles/components/my-memes/my-memes.css';

export const MyMemes = () => {

    const memes = JSON.parse( localStorage.getItem( 'memes' ) ) || [];

    return (
        <main>
            <div className="my-memes__header">
                <h1> My Memes </h1>
            </div>
            <div className="gallery">
                { memes.length === 0 && <h2> You don't have any saved meme yet </h2> }
                {
                    memes.map( ( meme, index ) => (
                        <Meme key={ index } { ...meme } myMeme={ true } />
                    ))
                }
            </div>
        </main>
    );
};

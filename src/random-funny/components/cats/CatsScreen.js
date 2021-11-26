import { RandomCard } from '../card/RandomCard';

export const CatsScreen = () => {
    return (
        <main>
            <h1> Cats </h1>
            <hr />
            <div className="home">
                <RandomCard 
                    apiImage="cat"
                    apiText="randomText"
                />
                <RandomCard 
                    apiImage="cat"
                    apiText="randomText"
                />
            </div>

        </main>
    );
};

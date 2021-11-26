import { RandomCard } from '../card/RandomCard';

export const DogsScreen = () => {
    return (
        <main>
            <h1> Dogs </h1>
            <hr />
            <div className="home">
                <RandomCard 
                    apiImage="dog"
                    apiText="randomText"
                />
                <RandomCard 
                    apiImage="dog"
                    apiText="randomText"
                />
            </div>

        </main>
    );
};


import { RandomCard } from '../card/RandomCard';
import { MediumCard } from './MediumCard';

import '../../assets/styles/components/home/home.css'

export const HomeScreen = () => {

    
    return (
        <div className="home">
            <RandomCard 
                apiImage="randomImage"
                apiText="randomText"
            />
            <div className="home__welcome">
                <MediumCard 
                    title="Welcome"
                    text="This is our project, where you can find thousands of random dog and cat memes !. Our goal is to declare war on stress and anxiety with memes. Come and explore our site you will have a lot of fun.
                          The random factor included in this project makes each meme unique, and therefore, special, made just for you."
                        
                />
                <MediumCard 
                    title="About Us"  
                    text="Enrique: 
                          Erick:
                          Enrique:
                          Enrique:
                         "
                />
            </div>
        </div>
    );
};

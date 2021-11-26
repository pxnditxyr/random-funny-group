import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';

import { Header } from '../components/ui/Header';
import { Footer } from '../components/ui/Footer';

import { HomeScreen } from '../components/home/HomeScreen';
import { CatsScreen } from '../components/cats/CatsScreen';
import { DogsScreen } from '../components/dogs/DogsScreen';
import { MyMemes } from '../components/my-memes/MyMemes';
import { NotFoundScreen } from '../components/not-found/NotFoundScreen';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="home" element={ <HomeScreen /> } />
                <Route path="dogs" element={ <DogsScreen /> } />
                <Route path="cats" element={ <CatsScreen /> } />
                <Route path="my_memes" element={ <MyMemes /> } />
                <Route path="/" element={ <HomeScreen /> } />
                <Route path="*" element={ <NotFoundScreen /> } />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

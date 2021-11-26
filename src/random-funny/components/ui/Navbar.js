import { Link } from 'react-router-dom';
import RandomFunnyIcon from '../../assets/icons/random-funny.svg';

export const Navbar = () => (
    <nav>
        <ul>
            <li>
                <Link to="/" className="link"> Home </Link>
            </li>
            <li>
                <Link to="/cats" className="link"> Cats </Link>
            </li>
            <li>
                <Link to="/home" className="link"> <img src={ RandomFunnyIcon } alt="cat"/> </Link>
            </li>
            <li>
                <Link to="/dogs" className="link"> Dogs </Link>
            </li>
            <li>
                <Link to="/my_memes" className="link your-memes"> My Memes </Link>
            </li>
        </ul>
    </nav>
);

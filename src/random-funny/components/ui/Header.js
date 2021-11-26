import { Navbar } from './Navbar';
import { Networks } from './Networks';

import '../../assets/styles/components/ui/header.css';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header>
            <div className="header__title">
                <Link to="/" className="title"> Random Funny </Link>
            </div>
            <Navbar />
            <Networks />
        </header>
    )
}

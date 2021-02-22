import {Link, useHistory} from 'react-router-dom';

const NavBar = () => {
    const history = useHistory();

    const back = () => {
        history.goBack();
    }
    return (
        <nav class="navbar">
            <li>
                <Link className='navbar-link' to='/'>Home</Link>
            </li>
            <li>
                <Link className='navbar-link' to='/timeline'>Timeline</Link>
            </li>
            <li>
                <Link className='navbar-link' to='/ww1map'>World War One Map</Link>
            </li>
        </nav>
    )
}

export default NavBar;
import {Link, useHistory} from 'react-router-dom';

const NavBar = () => {
    const history = useHistory();

    const back = () => {
        history.goBack();
    }
    return (
        <nav class="navbar">

        </nav>
    )
}

export default NavBar;
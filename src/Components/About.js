import '../styles/about.css';
import {Link, withRouter} from 'react-router-dom';

let About = () => {

    return (
        <div className='about'>
            Coming Soon
            <Link to='/'>Back</Link>
        </div>
    )
}

export default withRouter(About);
import '../styles/socials.css';
import {Link, withRouter} from 'react-router-dom';

let Socials = () => {

    return (
        <div className='socials'>
            Coming Soon
            <Link to='/'>Back</Link>
        </div>
    )
}

export default withRouter(Socials);
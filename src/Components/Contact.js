import '../styles/contact.css';
import {Link, withRouter} from 'react-router-dom';

let Contact = () => {

    return (
        <div className='contact'>
            Coming Soon
            <Link to='/'>Back</Link>
        </div>
    )
}

export default withRouter(Contact);
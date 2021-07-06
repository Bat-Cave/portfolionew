import '../styles/projects.css';
import {Link, withRouter} from 'react-router-dom';

let Projects = () => {

    return (
        <div className='projects'>
            Coming Soon
            <Link to='/'>Back</Link>
        </div>
    )
}

export default withRouter(Projects);
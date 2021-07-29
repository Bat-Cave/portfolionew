import '../styles/about.css';
import {Link, withRouter} from 'react-router-dom';

let About = () => {

    return (
        <div className='about'>
            <Link to='/'>Back</Link>

            <h1>Hey, I'm Rico.</h1>
            <h2>I aspire to become the best web developer I can.</h2>

            <p></p>
        </div>
    )
}

export default withRouter(About);
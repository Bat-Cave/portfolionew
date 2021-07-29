import '../styles/about.css';
import {Link, withRouter} from 'react-router-dom';

let About = () => {

    return (
        <div className='about'>
            <Link to='/'>Back</Link>

            <h1>Hey, I'm Rico.</h1>
            <h2>I'm from Southern Arizona.</h2>
            <h2>I like soccer, Taco Bell, gaming, and my wife.</h2>
            <h2>I aspire to become the best web developer I can.</h2>

        </div>
    )
}

export default withRouter(About);
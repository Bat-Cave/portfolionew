import '../styles/socials.css';
import {Link, withRouter} from 'react-router-dom';

let Socials = () => {

    return (
        <div className='socials'>
            <Link to='/'>Back</Link>
            <div className='links'>
                <a href='https://www.linkedin.com/in/richard-l-hancock' target='_blank' rel="noreferrer"><i className="fab fa-linkedin"></i> LinkedIn</a>
                <a href='https://www.facebook.com/richard.l.hancock' target='_blank' rel="noreferrer"><i className="fab fa-facebook"></i> Facebook</a>
                <a href='https://www.twitch.tv/monkeydrumma' target='_blank' rel="noreferrer"><i className="fab fa-twitch"></i> Twitch</a>
                <a href='https://www.instagram.com/uncle.ri.co/' target='_blank' rel="noreferrer"><i className="fab fa-instagram"></i> Instagram</a>
            </div>
        </div>
    )
}

export default withRouter(Socials);
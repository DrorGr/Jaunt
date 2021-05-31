import telAviv from '../assets/img/1.jpg'
import Jerusalem from '../assets/img/2.jpg'
import Eilat from '../assets/img/3.jpg'
import Haifa from '../assets/img/4.jpg'
import Netanya from '../assets/img/5.jpg'
import Herzliya from '../assets/img/6.jpg'
import RamatGan from '../assets/img/7.jpg'
import Tveria from '../assets/img/8.jpg'
import { Link, NavLink } from 'react-router-dom'
export function Nearby({ }) {
    const places = 
    [
        { name: 'Tel-Aviv', img: telAviv, time: 30 },
        { name: 'Jerusalem', img: Jerusalem, time: 50 },
        { name: 'Eilat', img: Eilat, time: 60 },
        { name: 'Haifa', img: Haifa, time: 40 },
        { name: 'Netanya', img: Netanya, time: 30 },
        { name: 'Herzliya', img: Herzliya, time: 50 },
        { name: 'Ramat Gan', img: RamatGan, time: 40 },
        { name: 'Tveria', img: Tveria, time: 20 },
    ]

    return (
        <section className="explore grid">
            {places.map((place) =>
                <Link to={`stay/?loc=${place.name}`}>
                    <div className="explore-preview flex">
                        <div className="img">
                        <img src={place.img} alt={place.name} />
                        </div>
                        <div className="destination flex column">
                            <span className="city">{place.name}</span>
                            <span>{`${place.time} minute drive`}</span>
                        </div>
                    </div>
                </Link>)}
        </section>
    )
}
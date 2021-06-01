import paris from '../assets/img/paris.jpg'
import london from '../assets/img/london.jpg'
import newYork from '../assets/img/new-york.jpg'
import istanbul from '../assets/img/istanbul.jpg'
import { Link, NavLink } from 'react-router-dom'
export function Anywhere() {
    const places = 
    [
        { name: 'Paris', img: paris},
        { name: 'London', img: london},
        { name: 'New York', img: newYork},
        { name: 'Istanbul', img: istanbul},
    ]

    return (
        <section className="live-anywhere grid">
            {places.map((place) =>
                <Link to={`stay/?loc=${place.name}`}>
                    <div className="anywhere-preview flex column">
                        <img src={place.img} alt={place.name} />
                        <div className="destination-name">
                            <span className="city">{place.name}</span>
                        </div>
                    </div>
                </Link>)}
        </section>
    )
}
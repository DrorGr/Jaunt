import inspierdImg from '../assets/img/get-inspired.jpg'
import { Link } from 'react-router-dom'

export function GetInspired() {

    return (
        
            <div className="inspiration flex column">
                <img src={inspierdImg} alt="" />
                <h1>The Greatest Houses</h1>
                <p>Wishlists curated by Jaunt</p>
                <div className="inspire-btn"><Link to={`/stay`}>Get Inspired</Link></div>
            </div>
      
    )

}
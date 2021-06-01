import inspierdImg from '../assets/img/get-inspired.jpg'

export function GetInspired() {

    return (
        <div className="inspiration">
            <img src={inspierdImg} alt="" />
            <div className="details flex column justify-center">
                <h1>The Greatest Houses</h1>
                <p>Wishlists curated by Jaunt</p>
                <button className="inspire-btn">Get Inspired</button>
            </div>
        </div>

    )

}
import { NavLink } from 'react-router-dom'

import { StayFilter } from './StayFilter'
import { Header } from './Header'

export function Hero({order, setDates, setGuestAmount}) {
    return (
        <section className="hero flex column full main-header main-container space-between">
            <section>
                <section className="header-container">
                    <Header />
                </section>
                <section className="search-container flex justify-center align-center">
                    <StayFilter order={order} setDates={setDates} setGuestAmount={setGuestAmount}/>
                </section>
            <div className="app-desc main-container flex column fs30">
                Jaunt <span>2021</span>
                <br />Enter a new journy
                <br /> <NavLink to="/stay">Get exploring</NavLink>
            </div>
            </section>
        </section>
    )
}
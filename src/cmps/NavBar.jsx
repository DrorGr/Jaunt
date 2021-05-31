import { StayFilter } from './StayFilter'
import { Header } from './Header'

export function NavBar() {
    return (
        <section className="full">
            {/* <section className="main-container header-container"> */}
            <section className="navbar-container header-container">
                <Header />
            </section>
            <section className="search-container hero flex justify-center align-center">
                <StayFilter />
            </section>
        </section>
    )
}
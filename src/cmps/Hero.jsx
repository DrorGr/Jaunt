import { StayFilter } from './StayFilter'
import { Header } from './Header'

export function Hero() {
    return (
        <section className="hero full main-header">
            <section className="main-container header-container">
                <Header />
            </section>
            <section className="search-container hero flex justify-center align-center">
                <StayFilter />
            </section>
        </section>
    )
}
import { StayFilter } from './StayFilter'
import { Header } from './Header'

export function Hero() {
    return (
        <section className="hero flex column full main-header space-between">
            <section>
                <section className="main-container header-container">
                    <Header />
                </section>
                <section className="search-container hero flex justify-center align-center">
                    <StayFilter />
                </section>
            </section>
            <div className="app-desc main-container flex column fs40">
                <div>
                <span>Jaunt </span>
                <span>2021</span>
                </div>
                <span>Enter a new journy</span>
            </div>
        </section>
    )
}
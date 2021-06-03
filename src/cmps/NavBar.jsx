import { StayFilter } from './StayFilter'
import { Header } from './Header'

export function NavBar({order, setDates, setGuestAmount, startDate, endDate}) {
    return (
        <section className="full">
            <section className="navbar-container header-container">
                <Header />
                <section className="search-container hero flex justify-center align-center">
                    <StayFilter order={order} setDates={setDates} setGuestAmount={setGuestAmount} startDate={startDate} endDate={endDate} />
                </section>
            </section>
        </section>
    )
}
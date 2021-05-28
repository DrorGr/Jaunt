import { StayPreview } from '../cmps/StayPreview.jsx'


export function StayList({ stays, onRemoveStay, loggedInUser }) {
    return (
        <section className="stay-list card-grid">
            {stays.map((stay, idx) => <StayPreview key={stay._id}
                stay={stay}
                // delayTrans={idx * 150}
                // onRemoveStay={onRemoveStay} 
                // loggedInUser={loggedInUser}
                />)}
        </section>
    )
}
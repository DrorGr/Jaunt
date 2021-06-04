import { Link } from 'react-router-dom'

export function UserModal() {

    return (
        // isUserModalShown &&
        <div className="user-modal flex column">
            <ul>
                <li>Messages</li>
                <Link to="/trips">
                    <li>Trips</li>
                </Link>
                <li>Wishlist</li>
                <div className="tiny-border-bottom"></div>
                <li>Host your home</li>
                <li>Host an experience</li>
                <li>Account</li>
                <div className="tiny-border-bottom"></div>
                <li>Help</li>
                <li>Log out</li>
            </ul>
        </div>
    )
}






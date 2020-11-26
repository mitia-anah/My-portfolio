import React from 'react'
import portfolio from '../assets/profile1.jpg'


function Profile() {
    return (
        <div className="profile__content">
            <img className="profile__content--img" src={portfolio} />
            <div className="profile__content--list">
                <ul>
                    <li className="profile">Name: <i>Ratsianompo Rosny</i></li>
                    <li className="profile">Gender: <i>Female</i></li>
                    <li className="profile">Age: <i>19</i></li>
                    <li className="profile">Nationality: <a>Malagasy</a></li>
                    <li className="profile">Location: <a>Mahanoro, 🇲🇬 </a></li>
                    <li className="profile">Height: <i>1.20m</i></li>
                    <li className="profile">Interested in: <i>Art, Movie, Music, computing</i></li>
                    <li className="profile">Job: frontEnd developer</li>
                    <li className="profile">phone: <i>+126 346 465 157</i></li>
                    <li className="profile">Email: Rosny.rat@onja.org / rratsianompo@Gmail.com</li>
                </ul>
            </div>
        </div>
    )
}

export default Profile
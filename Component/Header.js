import React from 'react'
import Lshine from '../assets/Lshine.png'
import Profile from '../Component/Profile'
import { useParams } from "react-router-dom"


function Navigation() {
    const { id } = useParams()
    const [link, setLink] = useState({})

    const getLink = async () => {
        try {
            const res = await fetch(BASE_URL + id + API_KEY + process.env.MOVIE_API);
            const newLink = await res.json()
            setMovie(newLink)
        } catch (e) {
            console.error(e);
        }
    }
    return (
        <header>
            <img className="lshine" src={Lshine} />
            <ul className='navigation'>
                <li><a className='nav-list' href={<Profile />}>Profile
                </a></li>
                <li><a className='nav-list' href=''>Job</a></li>
                <li><a className='nav-list' href=''>Blog</a></li>
                <li><a className='nav-list' href=''>Experiences</a></li>
                <li><a className='nav-list' href=''>Background</a></li>
                <li><a className='nav-list' href=''>Contact</a></li>
            </ul>
        </header>
    )
}

export default Navigation
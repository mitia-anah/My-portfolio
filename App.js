import React from 'react'
import Header from './Component/Header'
import DataList from './Component/DataList'
import { Link, Switch, Route } from 'react-router-dom'
import Blog from './Component/Blog'
import About from './Component/About'
import Profile from './Component/Profile'
import Contact from './Component/Contact'
import Websites from './Component/Websites'


function App() {
    return (
        <div className='app'>
            <header>
                <nav className='menu-bar'>
                    <ul className='menu-list'>
                        <Link to="/"><li className="menu">About</li></Link>
                        <Link to="/blog"><li className="menu">Blog</li></Link>
                        <Link to='/contact'><li className="menu">Contact</li></Link>
                        <Link to='/websites'><li className="menu">Websites</li></Link>
                    </ul>
                </nav>

            </header>
            <Switch>
                <Route exact path="/">
                    <Profile />
                </Route>
                <Route exact path="/blog">
                    <Blog />
                </Route>
                <Route exact path="/contact">
                    <Contact />
                </Route>
                <Route path="/websites">
                    <Websites />
                </Route>
            </Switch>
        </div>
    )
}
export default App
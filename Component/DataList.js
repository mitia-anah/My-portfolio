import React from 'react'
import movieAppart1 from '../assets/movieAppart1.png'
import movieAppart2 from '../assets/movieAppart2.png'
import randomQuote1 from '../assets/randomQuote1.png'
import randomQuote2 from '../assets/randomQuote2.png'
import teaTimeTopic from '../assets/teaTimeTopic.png'

function DataList() {
    const myList = [
        {
            "id": "p1",
            "title": "Tea Time Topic",
            "photo": teaTimeTopic,
            "link": "https://tea-time-topic.netlify.app/"
        },
        {
            "id": "p2",
            "title": "Movie Appart",
            "photo": movieAppart2,
            "link": "https://mitia-anah.github.io/game-landing/"
        },
        {
            "id": "p3",
            "title": "Frontend Assessment",
            "photo": movieAppart1,
            "link": "https://mitia-anah.github.io/front-end-assessment/"
        },
        {
            "id": "p4",
            "title": "Frontend Final",
            "photo": randomQuote1,
            "link": "https://mitia-anah.github.io/front-end-finals/ "
        },
        {
            "id": "p5",
            "title": "Random Quote",
            "photo": '',
            "link": "https://random-quote-by-react.netlify.app/"
        }
    ]

    return (
        <>
            <div className="lists">
                {myList.map(el =>
                    <div className='card' key={el.id}>
                        <img src={el.photo} />
                        <h2>{el.title}</h2>
                        <a href={el.link}>Memo</a>
                    </div>
                )}
            </div>
        </>
    )
}
export default DataList 
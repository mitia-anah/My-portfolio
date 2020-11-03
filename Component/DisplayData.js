import React, { useEffect, useState } from 'react'
import dataList from '../dataList.json'

function DisplayData() {
    let myData = dataList;
    console.log(myData);
    const [data, setMyData] = useState([])

    useEffect(() => {
        setMyData()
    }, [])

    return (
        <>
            <div className="lists">
                {myData.map(el =>
                    <div key={el.id}>
                        <h2>{el.title}</h2>
                        <a href={el.link}>Memo</a>
                    </div>
                )}
            </div>
        </>
    )
}

export default DisplayData
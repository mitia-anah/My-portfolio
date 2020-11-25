import React from 'react'
import DataList from '../Component/DataList'
console.log(DataList);

function Websites() {
    const myData = DataList.map(list => (
        <div className='my-website' key={list.id}>
            <img src={list.photo} />
            <h2>{list.title}</h2>
            <a href={list.link}>Memo</a>
        </div>
    ))
    console.log(myData);
    return (
        <>
            <div className="lists">
                {myData}
            </div>
        </>
    )
}
export default Websites
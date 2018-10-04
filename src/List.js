import React from 'react'


const List = (info) => (
    <div>
        <h2>{info.name}</h2>
        <ul>
            { info.items.map( item => (<Todo key={item.name} name={item.name} complete={item.complete}/>))}
        </ul>
    </div>
)

export default List;
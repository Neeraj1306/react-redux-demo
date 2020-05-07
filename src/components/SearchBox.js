import React from 'react'

const SearchBox = (props) => {
    console.log('Search')
    return (
        <div>
            <input 
                className="pa3 ba b--green bg-lightest-blue"
                type="search" 
                placeholder="search robot" 
                onChange={props.search}
            />
        </div>
    )
}
export default SearchBox;
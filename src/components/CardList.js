import React from 'react';
import Card from './Card'

const CardList = ({robots}) => {
    console.log('CardList.js')

    // const robotArray = robots.map((robot,i) =>{
    //     return <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email} />
    // })
    // throw new Error('err')
    return (
        <div>
            {
                robots.map((robot,i) =>{
                    return (
                        <Card 
                            key={robot.id} 
                            id={robot.id} 
                            name={robot.name} 
                            email={robot.email} 
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList
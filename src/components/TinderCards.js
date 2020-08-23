import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';
import database from '../firebase.js';

const TinderCards = () => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        // this is where code runs 
        const unsubscribe = database.collection('peoples').onSnapshot(snapshot => (
            setPeople(snapshot.docs.map(doc => doc.data()))
        ));

        return () => {
            // this is the clean up 
            unsubscribe();
        }
        
        // run once will component load and never run again
    }, []);

    return (
        <div>
            <div className="tindercard__container">
                { people.map(person => (
                    <TinderCard 
                        className="swipe"
                        key={person.id}
                        preventSwipe={['up', 'down']}
                    >
                        <div className="card" style={{ backgroundImage: `url(${person.url})` }}>
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    );
}
 
export default TinderCards;
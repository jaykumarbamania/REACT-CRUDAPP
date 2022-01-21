import React from 'react';
import Card from './Cards/Cards';
import rightArr from './RightSideArr';
import './SideBar.css';

export default function RightSide() {
    return (
        <div className='rightSideBar'>
                    {
            rightArr.map(card => {
                return(
                    <Card id={card.id}
                        imgpath={card.imgPath}
                        text={card.text}
                        technology={card.technology}
                    />
                )
            })
        }
        </div>
      );
}

import React from 'react';
import Card from './Cards/Cards';
import leftArr from './LeftSideArr';
import './SideBar.css';

export default function LeftSide() {
  return (
    <div className='leftSideBar'>
        {
            leftArr.map(card => {
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

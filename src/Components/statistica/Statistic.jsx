import React from 'react';
import AllStatistica from './AllStatistica';
import Preloader from '../home/Preloader';

export default function Statistic() {

    return (
        <>
            <div className="statistica">
                <div className="tp">
                    <div className="container">
                        <AllStatistica
                            allTitle="to'purarlar"
                            firstTitle="O'yinchi"
                            lastTitle='Gollar'
                            item="goals"
                        />
                        <AllStatistica
                            allTitle="Sariq kartochkalar"
                            firstTitle="O'yinchi"
                            lastTitle='Kartockalar'
                            item="yellow_cards"
                        />
                        <AllStatistica
                            allTitle="Qizil kartochkalar"
                            firstTitle="O'yinchi"
                            lastTitle='Kartockalar'
                            item="red_cards"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

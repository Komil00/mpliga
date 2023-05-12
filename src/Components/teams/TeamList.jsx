import React from 'react';
import { NavLink } from 'react-router-dom';
export default function TeamList(props) {
    let i = 1;
    return (
        <>
            <div className="club-list">
                <div className="container">
                    {
                        props.data.map(item => {
                            return (
                                <>
                                    <div className="all-statistic-card" key={item.id}>
                                        <NavLink to={`/aboutplayer-${item.id}`}>
                                            <div className="all-statistic-card-flex">
                                                <div className="all-statistica-card-number">
                                                    {i++}
                                                </div>
                                                <div className="all-statistic-card-image">
                                                    <img src={item.player.image} alt="player-img" width='50' />
                                                </div>
                                                <div className="all-statistic-card-player-info">
                                                    <div className="name">
                                                        {item.player.first_name} <span>{item.player.last_name}</span>
                                                    </div>
                                                    <div className="club-info">
                                                        <img src={item.player.club.icon} alt="logo-club" width='25' />
                                                        <span>{item.player.club.name}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </NavLink>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

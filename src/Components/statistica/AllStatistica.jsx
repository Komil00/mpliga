import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Preloader from '../home/Preloader';


const URL = 'http://3.145.97.191/api/v1/';

export default function AllStatistica(props) {

    const [data, setData] = useState([])
    async function getData(https) {
        await axios.get(`${URL}${https}`)
            .then(data => {
                setData(data.data);
            })
    }

    useEffect(() => {
        getData('aboutplayer');
    }, []);
    let i = 1;
    let loadNumber = false;



    return (
        <>
            <div className="all-statistica">
                <div className="all-statistica-title">
                    {props.allTitle}
                </div>
                <div className="all-statistica-title-flex">
                    <div className="all-statistica-title-first">
                        {props.firstTitle}
                    </div>
                    <div className="all-statistica-title-last">
                        {props.lastTitle}
                    </div>
                </div>
                {
                    data.map((item) => {
                        if (i < 6 && props.item === 'goals') {
                            data.sort((a, b) => {
                                if (b.goals < a.goals) return -1;
                                if (b.goals > a.goals) return 1;
                            });

                            return (
                                <>
                                    <div className="all-statistic-card" key={item.id}>
                                        <NavLink to={`/aboutplayer-${item.id}`}>
                                            <div className="all-statistica-card-flex">
                                                <div className="all-statistica-card-number">
                                                    {i++}
                                                </div>
                                                <div className="all-statistica-card-image">
                                                    <img src={item.player.image} alt="player-img" width='50' />
                                                </div>
                                                <div className="all-statistica-card-player-info">
                                                    <div className="name">
                                                        {item.player.first_name} <span>{item.player.last_name}</span>
                                                    </div>
                                                    <div className="club-info">
                                                        <img src={item.player.club.icon} alt="logo-club" width='25' />
                                                        <span>{item.player.club.name}</span>
                                                    </div>
                                                </div>
                                                <div className="all-statistica-card-counts">
                                                    {item.goals}
                                                </div>
                                            </div>
                                        </NavLink>
                                    </div>
                                </>
                            )
                        }
                        else if (i <= 7 && props.item === 'yellow_cards') {
                            data.sort((a, b) => {
                                if (b.yellow_cards < a.yellow_cards) return -1;
                                if (b.yellow_cards > a.yellow_cards) return 1;
                            })
                            return (
                                <>
                                    <div className="all-statistic-card" key={item.id}>
                                        <NavLink to={`/aboutplayer-${item.id}`}>
                                            <div className="all-statistica-card-flex">
                                                <div className="all-statistica-card-number">
                                                    {i++}
                                                </div>
                                                <div className="all-statistica-card-image">
                                                    <img src={item.player.image} alt="player-img" width='50' />
                                                </div>
                                                <div className="all-statistica-card-player-info">
                                                    <div className="name">
                                                        {item.player.first_name} <span>{item.player.last_name}</span>
                                                    </div>
                                                    <div className="club-info">
                                                        <img src={item.player.club.icon} alt="logo-club" width='25' />
                                                        <span>{item.player.club.name}</span>
                                                    </div>
                                                </div>
                                                <div className="all-statistica-card-counts">
                                                    {item.yellow_cards}
                                                </div>
                                            </div>
                                        </NavLink>
                                    </div>
                                </>
                            )
                        }
                        else if (props.item === 'red_cards') {
                            data.sort((a, b) => {
                                if (b.red_cards < a.red_cards) return -1;
                                if (b.red_cards > a.red_cards) return 1;
                            })
                            return (
                                <>
                                    <div className="all-statistic-card" key={item.id}>
                                        <NavLink to={`/aboutplayer-${item.id}`}>
                                            <div className="all-statistica-card-flex">
                                                <div className="all-statistica-card-number">
                                                    {i++}
                                                </div>
                                                <div className="all-statistica-card-image">
                                                    <img src={item.player.image} alt="player-img" width='50' />
                                                </div>
                                                <div className="all-statistica-card-player-info">
                                                    <div className="name">
                                                        {item.player.first_name} <span>{item.player.last_name}</span>
                                                    </div>
                                                    <div className="club-info">
                                                        <img src={item.player.club.icon} alt="logo-club" width='25' />
                                                        <span>{item.player.club.name}</span>
                                                    </div>
                                                </div>
                                                <div className="all-statistica-card-counts">
                                                    {item.red_cards}
                                                </div>
                                            </div>
                                        </NavLink>
                                    </div>
                                </>
                            )
                        }
                        else return;
                    })
                }
            </div>
        </>
    )
}

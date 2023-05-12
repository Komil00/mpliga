import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import Preloader from '../home/Preloader';
import teamLogo from '../../img/mpliga.png';

export default function Teams() {
  const URL = 'http://3.145.97.191/api/v1/';
  const [dataAboutPlayer, setDataAboutPlayer] = useState([]);
  const [clubs, setClubs] = useState([]);
  let searchTeamInput = document.getElementById('search-team-input');
  let searchTeamBtn = document.getElementById('search-team-btn')

  async function getData(http, setData) {
    await axios.get(`${URL}${http}`)
      .then((data) => {
        setData(data.data);
      });
  };
  useEffect(() => {
    getData('aboutplayer', setDataAboutPlayer);
    getData('club', setClubs);
  }, []);


  return (
    <>
      <div className="teams">
        <Preloader data={clubs} />
        <div className="tp">
          <div className="container">
            <div className="teams-flex">
              {
                clubs.map((club) => {
                  return (
                    <>
                      < NavLink to={`/club-${club.id}`} key={club.id} className='team-link'>
                        <div className="team">
                          <div className="team-image">
                            <img src={teamLogo} alt="team-logo" width='150px' />
                          </div>
                          <div className="team-title">
                            <p>{club.name}</p>
                            <span>Uzbekiston</span>
                          </div>
                        </div>
                      </NavLink>
                    </>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

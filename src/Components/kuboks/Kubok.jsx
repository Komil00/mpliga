import React, { useEffect, useState } from 'react';
import uzbekistanPng from '../../img/uzbekistan.png';
export default function Kubok(props) {
  // halfQuarter final list
  const halfQuarterFinal = [
    {
      id: 1,
      date: '20.05.2023',
      finish: false,
      home: {
        name: 'Farxod Posyolka',
        score: 0,
        logo: uzbekistanPng
      },
      guest: {
        name: 'Do\'stlik',
        score: 0,
        logo: uzbekistanPng
      }
    },
    {
      id: 2,
      date: '20.05.2023',
      finish: false,
      home: {
        name: 'Andrip',
        score: 0,
        logo: uzbekistanPng
      },
      guest: {
        name: 'Qirqlar2',
        score: 0,
        logo: uzbekistanPng
      }
    },
    {
      id: 3,
      date: '20.05.2023',
      finish: false,
      home: {
        name: 'Dinamo Samarqand',
        score: 0,
        logo: uzbekistanPng
      },
      guest: {
        name: 'Toshkent',
        score: 0,
        logo: uzbekistanPng
      }
    },
    {
      id: 4,
      date: '20.05.2023',
      finish: false,
      home: {
        name: 'Birlik',
        score: 0,
        logo: uzbekistanPng
      },
      guest: {
        name: 'Qo\'ng\'irot',
        score: 0,
        logo: uzbekistanPng
      }
    },
    {
      id: 5,
      date: '21.05.2023',
      finish: false,
      home: {
        name: 'Jomboy omadi',
        score: 0,
        logo: uzbekistanPng
      },
      guest: {
        name: 'Jomboy',
        score: 0,
        logo: uzbekistanPng
      }
    },
    {
      id: 6,
      date: '18.05.2023',
      finish: false,
      home: {
        name: 'Chala Qo\'rg\'on',
        score: 0,
        logo: uzbekistanPng
      },
      guest: {
        name: 'Pozitiv',
        score: 0,
        logo: uzbekistanPng
      }
    },
    {
      id: 7,
      date: '19.05.2023',
      finish: false,
      home: {
        name: 'Qirqlar',
        score: 0,
        logo: uzbekistanPng
      },
      guest: {
        name: 'Bobotepa',
        score: 0,
        logo: uzbekistanPng
      }
    },
    {
      id: 8,
      date: '23.05.2023',
      finish: false,
      home: {
        name: 'Guzay',
        score: 0,
        logo: uzbekistanPng
      },
      guest: {
        name: 'juriyat',
        score: 0,
        logo: uzbekistanPng
      }
    },
  ];
  halfQuarterFinal.sort((a, b) => {
    a = Number(a.date.split('.')[0]);
    b = Number(b.date.split('.')[0]);
    if (a < b) return -1;
    else return 1
  });
  return (
    <>
      <div className="kubok">
        <div className="tp">
          <div className="container">
            <div className="halfquarterfinal">
              <div className="halfquarterfinal-title">MP-Liga Kubok bahslari 1/8 final</div>
              {
                halfQuarterFinal.map((item) => {
                  return (
                    <>
                      <div className="halfquarterfinal-card" key={item.id}>
                        <div className="halfquarterfinal-card-flex">
                          <div className={`halfquarterfinal-card-home ${item.home.score < item.guest.score ?
                            'game-over' : ''
                            }`}>
                            <img src={item.home.logo} alt="uzbekistan" width='40px' />
                            <span>{item.home.name}</span>
                          </div>
                          <div className="halfquarterfinal-card-score">
                            <span className='home-score'>
                              {item.finish ? item.home.score : '-'}
                            </span>
                            :
                            <span className='guest-score'>
                              {item.finish ? item.guest.score : '-'}
                            </span>
                          </div>
                          <div className={`halfquarterfinal-card-guest ${item.home.score > item.guest.score ?
                            'game-over' : ''
                            }`}
                          >
                            <span>{item.guest.name}</span>
                            <img src={item.guest.logo} alt="uzbekistan" width='40px' />
                          </div>
                          <div className="halfquarterfinal-card-date">{item.date}</div>
                        </div>
                      </div >
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

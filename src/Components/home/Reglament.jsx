import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Reglament() {
    const navigate = useNavigate();
    const goBack = () => navigate(-1);
    const reglamentTitles = document.querySelectorAll('.join-title');
    const [searchText, setSearchText] = useState('');
    // const [searchTitles, setSearchTitles] = useState([])
    // find title in reglaments
    // useEffect(() => {
    //     setSearchTitles(reglamentTitles);
    // }, [])

    return (
        <>
            <div className="join" onDoubleClick={() => {
                console.log(true);
            }}>
                <div className="tp">
                    <div className="container">
                        <div className="join-head" id='join-head'>
                            <button onClick={goBack} className="back-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z" />
                                </svg>
                                Ortga
                            </button>
                            {/* <div className="reglament-search">
                                <input type="search" placeholder='qidirish...' id="reglament-search-input" onInput={(e) => setSearchText(e.target.value)} autoComplete='off' />
                                <ul>
                                    {
                                        reglamentTitles.forEach((item,index) => {
                                            return (
                                                item.textContent.toLowerCase().includes(searchText) ?
                                                    <li className="search-title-card" key={index}>
                                                        {item.textContent}
                                                    </li> : ''
                                            )
                                        })
                                    }
                                </ul>

                            </div> */}
                        </div>
                        <div className="join-title">
                            bizni qoidalar (reglament)
                        </div>
                        <div className="join-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Alias sed ipsam molestias cupiditate nisi nihil molestiae, obcaecati,
                            porro sequi <span>perferendis</span> voluptatum natus iste accusantium animi placeat <span>vitae</span> aspernatur tempora architecto.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Alias sed ipsam <span>molestias</span> cupiditate nisi nihil molestiae, obcaecati,
                            porro sequi perferendis voluptatum natus iste accusantium animi placeat vitae aspernatur tempora architecto.
                        </div>
                        <div className="join-title">
                            Ural Norquziyev qoidasi (reglament)
                        </div>
                        <div className="join-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Alias sed ipsam molestias cupiditate nisi nihil molestiae, obcaecati,
                            porro sequi <span>perferendis</span> voluptatum natus iste accusantium animi placeat <span>vitae</span> aspernatur tempora architecto.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Alias sed ipsam <span>molestias</span> cupiditate nisi nihil molestiae, obcaecati,
                            porro sequi perferendis voluptatum natus iste accusantium animi placeat vitae aspernatur tempora architecto.
                        </div>
                        <div className="join-title">
                            Fariddun kadirov sayti (reglament)
                        </div>
                        <div className="join-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Alias sed ipsam molestias cupiditate nisi nihil molestiae, obcaecati,
                            porro sequi <span>perferendis</span> voluptatum natus iste accusantium animi placeat <span>vitae</span> aspernatur tempora architecto.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Alias sed ipsam <span>molestias</span> cupiditate nisi nihil molestiae, obcaecati,
                            porro sequi perferendis voluptatum natus iste accusantium animi placeat vitae aspernatur tempora architecto.
                        </div>
                        {/* <a id='#join-head' className={`reglament-back-top ${toTop}`} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
                                <path d="M11.993 2.007a9.928 9.928 0 0 0-7.071 2.922c-3.899 3.899-3.899 10.243 0 14.143a9.931 9.931 0 0 0 7.071 2.923 9.928 9.928 0 0 0 7.071-2.923c3.899-3.899 3.899-10.243 0-14.143a9.927 9.927 0 0 0-7.071-2.922zm5.657 15.65a7.945 7.945 0 0 1-5.657 2.337c-2.141 0-4.15-.83-5.657-2.337-3.119-3.119-3.119-8.195 0-11.314a7.946 7.946 0 0 1 5.657-2.336c2.142 0 4.15.829 5.657 2.336 3.12 3.119 3.12 8.195 0 11.314z" /><path d="M14.657 9H8.993v5.663l2.125-2.124 3.215 3.214 1.414-1.414-3.215-3.214z" />
                            </svg>
                        </a> */}
                    </div>
                </div>
            </div>
        </>
    )
}

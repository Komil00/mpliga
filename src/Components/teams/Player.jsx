import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import videotest from '../../img/test.mp4';

export default function Player(props) {
  const [progressBar, setProgressBar] = useState([]);
  const [progressBarHover, setProgressBarHover] = useState([]);
  const [starCursor, setStarCursor] = useState(false);
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  useEffect(() => {
    setProgressBar(document.querySelectorAll('.player-stadion-rating .rating div span span'));
    setProgressBarHover(document.querySelectorAll('.star-hover-rating  div span span'));
  }, []);
  useEffect(() => {
    // star hover rating display block
    if (starCursor) {
      document.querySelector('.star-hover-rating').style.display = 'block';
    } else {
      document.querySelector('.star-hover-rating').style.display = 'none';
    }
  })
  if (progressBar[0]) {
    progressBar[0].style.width = props.force + '%';
    progressBar[1].style.width = props.technique + '%';
    progressBar[2].style.width = props.pas + '%';
    progressBarHover[0].style.width = props.force + '%';
    progressBarHover[1].style.width = props.technique + '%';
    progressBarHover[2].style.width = props.pas + '%';
  }
  return (
    <>
      <div className="player" key={props.id}>
        <div className="tp">
          <div className="container">
            <button onClick={goBack}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z" />
              </svg>
              Ortga
            </button>
            <div className="player-titles">
              <div className="player-titles-flex">
                <div className="player-title-info-img">
                  <h1>#{props.playerNum} <span>{props.firstName}</span> {props.lastName}</h1>
                  <div className="player-title-info-flex">
                    <img src={props.srcImg} alt="player-image" width="100px" height="100px" />
                    <div>
                      <p>Yoshi: <span>{props.age}</span></p>
                      <p>Millati: <span><img src={props.clubLogo} alt="Uzbekistan" width="30px" height="15px" /> Uzbekiston</span></p>
                    </div>
                  </div>
                </div>
                {props.force > 0 || props.technique > 0 || props.pas > 0 ?
                  <img src={props.srcStar} alt="star"
                    onMouseOver={() => setStarCursor(true)}
                    onMouseOut={() => setStarCursor(false)}
                    onClick={(() => setStarCursor(!starCursor))}
                    width="50px" height="50px" /> :
                  <div className='star'><span>Reyting:</span><span>0</span></div>}
              </div>
              <div className="star-hover-rating">
                <div>
                  <p>Kuch: <span>{props.force}</span></p>
                  <span><span></span></span>
                </div>
                <div>
                  <p>texnika: <span>{props.technique}</span></p>
                  <span><span></span></span>
                </div>
                <div>
                  <p>pas: <span>{props.pas}</span></p>
                  <span><span></span></span>
                </div>
              </div>
            </div>
            <div className="player-info">
              <div className="player-info-title">
                <h1>Futbolchi haqida</h1>
              </div>
              <div className="player-info-flex">
                <div className="player-info-details">
                  <div><span>Isim Familiyasi:</span><span>{props.lastName} {props.firstName}</span></div>
                  <div><span>Yoshi:</span><span>{props.age}</span></div>
                  <div><span>Millati:</span><span><img src={props.clubLogo} alt="Uzbekistan" width="30px" height="15px" /> Uzbekiston</span></div>
                  <div><span>Jamoasi:</span><NavLink to='/teams'>{props.clubName}</NavLink></div>
                  <div><span>Gollari:</span><span>{props.goals}</span></div>
                  <div><span><img src={props.srcYellowCard} alt="yellow-card" width="auto" height="40px" /></span><span>{props.yellowCard}</span></div>
                  <div><span><img src={props.srcRedCard} alt="red-card" width="auto" height="40px" /></span><span>{props.redCard}</span></div>
                </div>
                <div className="player-stadion-rating">
                  <h5><span>Asosan qaysi nuqtada harakatlanadi</span></h5>
                  <div className="stadion">
                    <img src={props.stadion} alt="stadion" />
                    <div></div>
                  </div>
                  <div className="rating">
                    <h5><span>Reyting</span></h5>
                    <div><p>Kuch:</p><span><span></span></span><p>{props.force}</p></div>
                    <div><p>texnika:</p><span><span></span></span><p>{props.technique}</p></div>
                    <div><p>pas:</p><span><span></span></span><p>{props.pas}</p></div>

                    <div className="like-player">
                      <svg xmlns="http://www.w3.org/2000/svg" width="25px" viewBox="0 0 512 512">
                        <path d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z" />
                      </svg>
                      <span>{props.like}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

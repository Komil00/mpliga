import React from 'react';

export default function Preloader(props) {
    const preloader = document.querySelector('.preloader');

    if (props.data) {
        setTimeout(() => {
            preloader.classList.add('loader-none')
        }, 1000);
    }
    return (
        <>
            <div className="preloader">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </>
    )
}


import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Preloader from '../home/Preloader';
import { useNavigate } from 'react-router-dom';

export default function NewCardInfo({ children }) {
    return (
        <>
            <div className="news-card-info">
                <div className="tp">
                    <div className="container">
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}

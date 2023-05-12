import React from 'react'

export default function Team({ children }) {
    return (
        <>
            <div className="tp">
                <div className="container">
                    {children}
                </div>
            </div>
        </>
    )
}

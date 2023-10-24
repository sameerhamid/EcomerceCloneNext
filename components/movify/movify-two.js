import React from 'react'

const MovifyTwo = () => {
    const tabs = [
        { id: 1, star: "*", tab: 'INICIAL' },
        { id: 2, star: "**", tab: 'EXTRA' },
        { id: 3, star: "***", tab: 'PRO' },
    ];


    return (
        <div className='movify_two_wrapper'>

            <div className="heading">
                Categorías de socio
            </div>
            <div className="title">
                Muvify tiene 3 categorías para entregarte una experiencia única según tus hábitos de viajes.
            </div>
            <div className="tabs">
                {tabs.map(tab => {
                    return <div className="tab" key={tab.id}>
                        <div className="star">{tab.star}</div>
                        <div className="tab_text">{tab.tab}</div>
                    </div>
                })}
            </div>

            <div className="cards_wrapper">

            </div>
        </div>
    )
}

export default MovifyTwo

import React, { useState } from 'react'

const MovifyTwo = () => {
    const tabs = [
        { id: 0, star: "/images/movify/star-white-icon.svg", tab: 'INICIAL' },
        { id: 1, star: "/images/movify/star-white-icon.svg", tab: 'EXTRA' },
        { id: 2, star: "/images/movify/star-white-icon.svg", tab: 'PRO' },
    ];
    const [tabId, setTabId] = useState(0)

    const leftCardDetails = [
        { id: 0, imgUrl: "", title: "Compra online", },
        { id: 1, imgUrl: "", title: "Vigencia de puntos", },
        { id: 2, imgUrl: "", title: "Atención preferente", },
        { id: 3, imgUrl: "", title: "Compra presencial", },
        { id: 4, imgUrl: "", title: "Mes de cumpleaños", },
        { id: 5, imgUrl: "", title: "Beneficios adicionales", },

    ]


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

                    return <div className={`tab ${tab.id == tabId ? "active" : null}`} key={tab.id} onClick={() => setTabId(tab.id)}>
                        <img src="/images/movify/star-white-icon.svg" alt="" />
                        <div className="tab_text">{tab.tab}</div>
                    </div>
                })}
            </div>

            <div className="cards_wrapper">
                <div className="left">
                    <img src="/images/movify/sidebar-illustration-2-icon.svg" alt="" />
                    <h1>Perteneces a la categoría</h1>
                    <div className="index_level">{ }</div>
                    <div className="index_level_2">Si realizas viajes entre</div>
                    <div className="index_level_3"></div>
                </div>
            </div>
        </div>
    )
}

export default MovifyTwo

const LeftCards = () => {
    return <div className="card">

    </div>
}

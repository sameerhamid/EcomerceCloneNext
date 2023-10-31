import React, { useState } from 'react'

const MovifyTwo = () => {
    const tabs = [
        { id: 0, star: "/images/movify/star-white-icon.svg", tab: 'INICIAL' },
        { id: 1, star: "/images/movify/star-white-icon.svg", tab: 'EXTRA' },
        { id: 2, star: "/images/movify/star-white-icon.svg", tab: 'PRO' },
    ];
    const [tabId, setTabId] = useState(0)

    const leftCardDetails = [
        { id: 0, imgUrl: "/images/movify/sidebar-illustration-2-icon.svg", title: "INICIAL *", btnText: "$0 y $120.000 al año" },
        { id: 1, imgUrl: "/images/movify/sidebar-illustration-1-icon.svg", title: "EXTRA **", btnText: "$120.001 y $480.000 al año" },
        { id: 2, imgUrl: "/images/movify/sidebar-illustration-1-icon.svg", title: "PRO ***", btnText: "$480.001 al año" },

    ]

    const rightCardDetails = [
        { id: 0, imgUrl: "/images/movify/compra-online-icon.svg", title: "Compra online", btnText: "$0 y $120.000 al año", desc: "Acumulas 2% del total *Ejemplo: Tu pasaje cuesta $10.000, acumulas $200 Pesos Muvify" },
        { id: 1, imgUrl: "/images/movify/compra-dollar-icon.svg", title: "Vigencia de puntos", btnText: "$120.001 y $480.000 al año", desc: "12 meses." },
        { id: 2, imgUrl: "/images/movify/compra-telephone-icon.svg", title: "Atención preferente", btnText: "$480.001 al año", desc: "Sin atención preferente." },
        { id: 3, imgUrl: "/images/movify/compra-presicianal-icon.svg", title: "Compra presencial", btnText: "$480.001 al año", desc: "Acumulas 1% del total *Ejemplo: Tu pasaje cuesta $10.000, acumulas $100 Pesos Muvify." },
        { id: 4, imgUrl: "/images/movify/compra-cake-icon.svg", title: "Mes de cumpleaños", btnText: "$480.001 al año", desc: "Acumulas 20% adicional durante todo el mes." },
        { id: 5, imgUrl: "/images/movify/compra-benificios-icon.svg", title: "Beneficios adicionales", btnText: "$480.001 al año", desc: "Descuentos en comercios asociados." },
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
                    {leftCardDetails.filter(card => card.id == tabId).map(filterdCard => <LeftCards filterdCard={filterdCard} />)}
                </div>
                <div className="right">
                    {rightCardDetails.map(card => <RightCards card={card} key={card.id} />)}
                </div>
            </div>
        </div>
    )
}

export default MovifyTwo

const LeftCards = ({ filterdCard }) => {
    return <div className="left_card">
        <img src={filterdCard.imgUrl} alt="" />
        <h1>Perteneces a la categoría</h1>
        <div className="index_level">{filterdCard.title}</div>
        <div className="index_level_2">Si realizas viajes entre</div>
        <div className="index_level_3">{filterdCard.btnText}</div>
    </div>
}


const RightCards = ({ card }) => {
    return <div className="right_cards">
        <img src={card.imgUrl} alt="" />
        <div className='card_details'>
            <div className="title">{card.title}</div>
            <div className="desc">{card.desc}</div>
        </div>
    </div>
}

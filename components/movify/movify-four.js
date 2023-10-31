import React from 'react'

const MovifyFour = () => {
    const cards = [
        { id: 0, imgUrl: "/images/movify/coppelia-icon.svg" },
        { id: 1, imgUrl: "/images/movify/assist-card-icon.svg" },
        { id: 2, imgUrl: "/images/movify/eventos-icon.svg" },
        { id: 3, imgUrl: "/images/movify/totto-logo-icon.svg" },
        { id: 4, imgUrl: "/images/movify/ibis-logo-icon.svg" },
        { id: 5, imgUrl: "/images/movify/tarragona-icon-new.svg" },
    ]
    return (
        <div className='movify_four_wrapper'>
            <div className="movify_four_heading">
                Descuentos exclusivos
            </div>
            <div className="movify_four_title">
                Accede a descuentos exclusivos por ser parte del programa Muvify.
            </div>
            <div className="movify_four_cards">
                {cards.map(card => <MovifyFourCard card={card} key={card.id} />)}
            </div>
        </div>
    )
}

export default MovifyFour


const MovifyFourCard = ({ card, key }) => {
    return (
        <div className="card" key={key}>
            <img src={card.imgUrl} alt="" />
            <div className="btns">
                <div className="btn"><span>*</span> INICIAL</div>
                <div className="btn"><span>**</span> EXTRA</div>
                <div className="btn"><span>***</span> PRO</div>
            </div>
            <div className="info">
                <img src="/images/movify/info-icon.svg" alt="info icon" />
            </div>
        </div>
    )
}
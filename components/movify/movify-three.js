import React from 'react'

const MovifyThree = () => {
    const listDetails = [
        { id: 0, imgUrl: "/images/movify/www-icon.svg", title: "Nuestros portales" },
        { id: 1, imgUrl: "/images/movify/building-icon.svg", title: "Oficinas de venta" },
        { id: 2, imgUrl: "/images/movify/ticket-hand-icon.svg", title: "Venta empresas a través de", titleSec: "Simplus" },
    ]
    const cardDetails = [
        { id: 0, imgUrl: "/images/movify/illustration-1-icon.svg", title: "Ingresa a tu cuenta en el nuevo sitio web www.turbus.cl." },
        { id: 1, imgUrl: "/images/movify/illustration-2-icon.svg", title: "Elige tu origen, destino y tus fechas de viaje (ida o ida y vuelta)." },
        { id: 2, imgUrl: "/images/movify/illustration-3-icon.svg", title: "Al momento de pagar, elige tus puntos como medio de pago ¡y listo!", },
    ]
    return (
        <div className='movify_three_wrapper'>
            <div className="heading">
                Pesos Muvify
            </div>
            <div className="movify_three_title">
                Podrás acumular Pesos Muvify cada vez que viajes en alguna de las empresas Turbus, Cóndor, JAC y Bio Bio, siempre que hayas adquirido tus pasajes a través de:
            </div>

            <div className="list_wrapper">
                {listDetails.map(card => <List card={card} key={card.id} />)}
            </div>


            <div className="card_wrapper">
                <div className="card_heading">¿Cómo canjear mis pesos Muvify?
                </div>
                <div className="card_title">
                    <div>
                        Por ser parte de Muvify, puedes canjear tus Pesos Muvify en tu compra por la totalidad de tus pasajes. Tus
                    </div>
                    <div >Pesos Muvify pueden ser usados como cualquier otro medio de pago.</div>
                </div>


                <div className="cards">
                    {cardDetails.map(card => <Card card={card} key={card.id} />)}
                </div>
            </div>
        </div>
    )
}

export default MovifyThree

const List = ({ card, key }) => {
    return <div className="list" key={key}>
        <img src={card?.imgUrl} alt="" />
        <div style={{ textAlign: "center" }}>
            <div className="list_title">{card?.title}</div>
            <div className="list_title_sec">{card?.titleSec}</div>
        </div>
    </div>
}

const Card = ({ card, key }) => {
    return <div className="card" key={key}>
        <img src={card.imgUrl} alt="" />
        <div className="card_title">{card.title}</div>
        <div className="card_num"><span>{card.id + 1}</span></div>
    </div>
}
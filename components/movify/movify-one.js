import React from 'react'

const MovifyOne = () => {
    const movifyOneCardDetails = [
        {
            id: 1,
            imgUrl: '/images/movify/dollar-icon.svg',
            title: "Acumula pesos Muvify",
            description: "Acumula pesos Muvify cada vez que viajes en cualquiera de nuestras empresas asociadas Turbus, Cóndor Bus, JAC, Buses Biobio y por compras en nuestros portales propios."
        },
        {
            id: 2,
            imgUrl: '/images/movify/exchange-currency-icon.svg',
            title: "Canjea pesos Muvify",
            description: "Tus pesos Muvify se usan como medio de pago en la web o en las cajas de los terminales. Puedes usarlos para pagar tus pasajes de cualquiera de las compañías asociadas.​"
        },
        {
            id: 3,
            imgUrl: '/images/movify/diamond-icon.svg',
            title: "Descuentos exclusivos",
            description: "Siente la tranquilidad con Muvify de acumular pesos Muvify cada vez que viajas. Además puedes acceder a distintos beneficios de acuerdo a tu categoría de socio.​​"
        },
    ]
    return (
        <div className='movify_comp_wrapper'>
            <div className="heading">¿Qué es Muvify?</div>
            <div className="title">
                <div>Muvify es nuestro programa de pasajero frecuente, es una forma en la que el mundo se mueve mejor. La agilidad y conveniencia para que vayas a donde quieras, ​¡porque nos encanta que viajes en bus!</div>
                <div>¡Ahora el que acumula es el que viaja! Gana pesos Muvify cada vez que viajes en nuestras compañías asociadas.
                </div>
            </div>

            <div className="mivif_capsule">
                <img src="/images/movify/turbus-logo.svg" alt="" />
                <img src="/images/movify/condor-logo.svg" alt="" />
                <img src="/images/movify/jac-logo.svg" alt="" />
                <img src="/images/movify/bio-bio-logo.svg" alt="" />
            </div>

            <div className="illustration">
                <div className="left_illustration">
                    <img src="/images/movify/left-muvify-illustration.svg" alt="" />
                </div>
                <div className="right_illustration">
                    <div className="illustration_heading">
                        La moneda de acumulación del programa serán Pesos Muvify.
                    </div>
                    <div className="illustration_title">Los pesos del programa serán equivalentes a $1 para efectos de compras y canjes de pasajes.</div>
                    <div className="illustration_btn">
                        1 peso Muvify = $1 CLP
                    </div>
                </div>
            </div>


            <div className="movify_one_cards">
                <div className="card_heading">
                    ¿Qué beneficios obtengo al inscribirme en el Club Muvify?
                </div>
                <div className="card_container">
                    {movifyOneCardDetails.map(card => <MovifyOneCards card={card} key={card.id} />)}
                </div>

            </div>

            <div className="information_capsule">
                <div className="left">
                    <img src="/images/movify/club-muvify-information.svg" alt="" />
                    <div>Entérate de los términos y condiciones al ser socio de Club Muvify</div>
                </div>
                <img src="/images/movify/arrow-right-icon.svg" alt="" />
            </div>

        </div>
    )
}

export default MovifyOne

const MovifyOneCards = ({ card, key }) => {
    return <div className="card">
        <img src={card.imgUrl} alt="" />
        <div className="card_title">
            {card.title}
        </div>
        <div className="card_description">
            {card.description}
        </div>
    </div>
}
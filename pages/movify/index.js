import React, { useState } from 'react'
import Navbar from '../../components/ui-elements/nav-bar/navbar'
import MovifyOne from '../../components/movify/movify-one'
import MovifyTwo from '../../components/movify/movify-two'
import MovifyThree from '../../components/movify/movify-three'
import MovifyFour from '../../components/movify/movify-four'

const index = () => {
    const tabs = [
        { id: 1, title: "¿Qué es Muvify?", },
        { id: 2, title: "Categorías de socio", },
        { id: 3, title: "Pesos Muvify", },
        { id: 4, title: "Descuentos exclusivos", },
    ]
    const [tabId, setTabId] = useState(1)
    return (
        <div>
            <Navbar />
            <div className="movify_wrapper">
                <div className="left_movify">
                    <div className="card">
                        <div className="club_movify">
                            <img src="/images/movify/tnc-icon.svg" alt="" />
                            <div className="title">CLUB MUVIFY</div>
                        </div>
                        <div className="movify_items">
                            <ul>
                                {tabs.map(tab => (<li key={tab.id} onClick={() => setTabId(tab.id)} >
                                    {tab.title}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="right_movify">
                    {tabId == 1 ? <MovifyOne /> : tabId == 2 ? <MovifyTwo /> : tabId == 3 ? <MovifyThree /> : tabId == 4 ? <MovifyFour /> : null}
                </div>
            </div>
        </div>
    )
}

export default index

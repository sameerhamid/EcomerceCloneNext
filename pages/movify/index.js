import React, { useState } from 'react'
import Navbar from '../../components/ui-elements/nav-bar/navbar'
import MovifyOne from '../../components/movify/movify-one'
import MovifyTwo from '../../components/movify/movify-two'
import MovifyThree from '../../components/movify/movify-three'
import MovifyFour from '../../components/movify/movify-four'

const index = () => {
    const tabs = [
        { id: 0, title: "¿Qué es Muvify?", },
        { id: 1, title: "Categorías de socio", },
        { id: 2, title: "Pesos Muvify", },
        { id: 3, title: "Descuentos exclusivos", },
    ]
    const [tabId, setTabId] = useState(0)
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
                                {tabs.map(tab => (<li key={tab.id} onClick={() => setTabId(tab.id)} className={`${tab.id == tabId ? "active" : null}`}>
                                    {tab.title}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="right_movify">
                    {tabId == 0 ? <MovifyOne /> : tabId == 1 ? <MovifyTwo /> : tabId == 2 ? <MovifyThree /> : tabId == 3 ? <MovifyFour /> : null}
                </div>
            </div>
        </div>
    )
}

export default index

import React from 'react'
import { useState } from 'react'

function Tabs() {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index)
    }
    return (
        <div className='tabs_wrapper'>
            <div className='bloc-tabs'>
                <div className={toggleState === 1 ? "active-tab" : "tab"} onClick={() => toggleTab(1)}>Tab1</div>
                <div className={toggleState === 2 ? "active-tab" : "tab"} onClick={() => toggleTab(2)}>Tab2</div>
                <div className={toggleState === 3 ? "active-tab" : "tab"} onClick={() => toggleTab(3)}>Tab3</div>

            </div>
            <div className='content-tabs'>
                <div className={toggleState === 1 ? "active-content" : "content"}  >
                    <h2>content 1</h2>
                    <hr />
                    <p>hello this is content of tab 1
                    </p>
                </div>
                <div className={toggleState === 2 ? "active-content" : "content"}  >
                    <h2>content 2</h2>
                    <hr />
                    <p>hello this is content of tab 2
                    </p>
                </div><div className={toggleState === 3 ? "active-content" : "content"} >
                    <h2>content 3</h2>
                    <hr />
                    <p>hello this is content of tab 3
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Tabs

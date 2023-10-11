import React, { useState } from 'react'
import Storage from '../../components/myComponents/Storage'
import KitchenItems from '../../components/myComponents/KitechenItems'
const tabs = [
    { id: 0, name1: "Storage" },
    { id: 2, name2: "Rooms" },
]
function showtabs() {
    const [toogleState, setToggleState] = useState(1)
    const Tab = ({ tab }) => {
        return (
            <div className='showtab'>
                <div className='active-btn tab'>{tab.name1}</div>
                <div className='tab'>{tab.name2}</div>

            </div>
        )
    }
    return (
        <div>
            <div className='tabBtns'>
                {tabs?.map((tab) => <Tab tab={tab} />)}
            </div>
            <Storage />
            <KitchenItems />

        </div>
    )
}

export default showtabs

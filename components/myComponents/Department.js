import React from 'react'
import { IoIosArrowDropleftCircle } from 'react-icons/io'

function Department() {
    return (
        <div className='DepartmentLinks'>
            <span className='title'>Department</span>
            <span><IoIosArrowDropleftCircle />Accessories & Supplies</span>
            <span><IoIosArrowDropleftCircle />Camera  & Phot </span><span><IoIosArrowDropleftCircle />Cell Phones & Accessories</span><span><IoIosArrowDropleftCircle />Accessories & </span><span><IoIosArrowDropleftCircle />Accessories & </span><span><IoIosArrowDropleftCircle />Accessories & </span><span><IoIosArrowDropleftCircle />Accessories & </span><span><IoIosArrowDropleftCircle />Accessories & </span><span><IoIosArrowDropleftCircle />Accessories & </span><span><IoIosArrowDropleftCircle />Accessories & </span><span><IoIosArrowDropleftCircle />Accessories & </span><span><IoIosArrowDropleftCircle />Accessories & </span><span><IoIosArrowDropleftCircle />Accessories & </span>
            <div className='radio_text'>
                <span className='title'>Business Type</span>
                <input type='radio' name="radio" className='radiobtn'></input>
            </div>
        </div>
    )
}

export default Department

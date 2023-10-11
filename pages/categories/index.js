import React from 'react'
import { Navbar } from 'react-bootstrap'
import Department from '../../components/myComponents/Department'
import CategoriesSec from '../../components/myComponents/CategoriesSec'
import NavbarSec from '../../components/myComponents/NavbarSec'




function Categories() {

    return (
        <div className='categories_wrapper'>
            <NavbarSec />
            <div className='categories_container'>
                <div><Department /></div>
                <div>.<CategoriesSec /></div>
            </div>
        </div >
    )
}

export default Categories

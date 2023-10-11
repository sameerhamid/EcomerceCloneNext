import React, { Fragment } from 'react'
import NavbarSec from '../../components/myComponents/NavbarSec';
import Department from '../../components/myComponents/Department';
import Categories from '../categories';
import Cart from '../../components/myComponents/Cart';
import Watches from '../../components/myComponents/Watches';

function Products() {
    return (
        <div className='product_body'>
            <NavbarSec />
            <div>
                <Watches />
            </div>
        </div>
    )
}

export default Products;

import * as React from 'react';
import Cart from './Cart';
import OtherProducts from './OtherProducts'

export default function Body(){


    return(
        <React.Fragment>
            <Cart />
            <OtherProducts />
        </React.Fragment>
    )
}
import * as React from 'react';
import FirstNav from './FirstNav';
import SecondNav from './SecondNav';
export default function Header(){


    return(
        <React.Fragment>
            <FirstNav />
            <SecondNav />
        </React.Fragment>
    )
}
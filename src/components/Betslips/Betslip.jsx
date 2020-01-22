import React, { Component } from 'react'

import {Link} from 'react-router-dom'



const Betslip = (props) => (
    
            <div>
                <button onChange={(e) => props.handleOnChange(e)}>Search Fixtures</button>
                <Link to='/fixturelist'>
                <button onClick={props.handleOnClick}>Search Fixtures</button>    
                </Link> 
            </div>
        )


export default Betslip;
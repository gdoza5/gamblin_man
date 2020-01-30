import React, { Component } from 'react'

import {Link} from 'react-router-dom'



const Betslip = (props) => (
    
            <div>
                <button class="btn btn-dark" onChange={(e) => props.handleOnChange(e)}></button>
                <Link to='/fixturelist'>
                <button class="btn btn-dark"onClick={props.handleOnClick}>Search Fixtures</button>    
                </Link> 
            </div>
        )


export default Betslip;
import React from 'react';

import Betslip from '../../components/Betslips/Betslip'

const BetslipPage = props => {
    return (
        <div className="">
            <h1>Search fixtures</h1>
            <Betslip 
            handleOnClick={props.handleOnClick}
            handleOnChange={props.handleOnClick}
            />
        </div>
    )
};

export default BetslipPage;

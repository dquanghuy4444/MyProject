import React , { useState } from 'react';
import { Tooltip } from 'reactstrap';

const ButtonCopyText = ({text}) => {
    const [tooltipOpen, setTooltipOpen] = useState(false);
    const [textToolTip, setTextToolTip] = useState("Bấm để copy");

    const toggle = () =>{
        setTooltipOpen(!tooltipOpen);
    } 


    const copyText = () =>{
        navigator.clipboard.writeText(text);
    }
    return (
        <>
            <div id="DisabledAutoHideExample" style={{ cursor: "pointer" , display: "inline" , color: "#4b164e"}} onClick={ copyText }>
                <i class="fas fa-copy"></i>
            </div>
            <Tooltip placement="top" isOpen={tooltipOpen} autohide={false} target="DisabledAutoHideExample" toggle={toggle}>
                { textToolTip }
            </Tooltip>
        </>

        
    );
};

export default ButtonCopyText;
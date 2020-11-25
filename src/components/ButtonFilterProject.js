import React , {useState} from 'react';
import './ButtonFilterProject.css';
import { FormGroup, Label, Input } from 'reactstrap';

function ButtonFilterProject({ setFilter , filter }) {
    const [isOpenFilterMode , setIsOpenFilterMode] = useState(false);

    const setStateFilter = (state) =>{
        let stateTemp = filter.state;

        if(stateTemp === -1){
            stateTemp = 1 - state;
        }
        else if(stateTemp === (1-state)){
            stateTemp = -1;
        }
        setFilter({...filter,state:stateTemp});
    }

    const setTechIdFilter = (e) =>{
        const techid = parseInt(e.target.value);
        setFilter({...filter,techid:techid});
    }

    return (
        <div className={ isOpenFilterMode ? 
            "filterpj-button darkmode filterpj-button-active" :
            "filterpj-button darkmode"
        }>
            <span onClick={() =>{ setIsOpenFilterMode(!isOpenFilterMode) }}>
                <i className="fas fa-sliders-h"></i>
            </span>
            {
                isOpenFilterMode && (
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" checked={filter.state === -1 || filter.state === 0} onClick={ () => setStateFilter(0) } /> Tự thiết kế
                        </Label>
                    </FormGroup>
                )
            }
            {
                isOpenFilterMode && (
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" checked={filter.state === -1 || filter.state === 1} onClick={ () => setStateFilter(1) }  /> Sao chép 
                        </Label>
                    </FormGroup>
                )
            }
            {
                isOpenFilterMode && (
                    <FormGroup>
                        <Input type="select" name="select" value={filter.techid} id="123" onChange={ setTechIdFilter }>
                            <option value="-1">Tất cả</option>
                            <option value="0">ASP.Net</option>
                            <option value="1">ReactJS</option>
                            <option value="2">NodeJS</option>
                        </Input>
                    </FormGroup>
                )
            }

        </div>   
    );
}

export default ButtonFilterProject;

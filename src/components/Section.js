import React from 'react'
import styled from 'styled-components'

function Section({Icon, title, color, selected}) {
    return (
        <SectionWrapper className={`${selected && 'section--selected'}`}
        style={{borderBottom: `3px solid ${color}`,
        color: `${selected && color}`}}>
            <Icon />
            <h4>{title}</h4>
        </SectionWrapper>
    )
}

export default Section
const SectionWrapper = styled.div`
display: flex;
align-items: center;
border-bottom-width: 2px;
padding: 15px;
min-width: 200px;
cursor: pointer;
color: grey;
border-width: 0 !important;

h4{
    font-size: 14px;
    margin-left: 15px;
}
:hover{
    background-color: whitesmoke;
    border-width: 3px !important;
}`
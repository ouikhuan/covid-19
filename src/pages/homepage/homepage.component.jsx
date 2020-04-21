import React from 'react';
import LeftPanel from '../../components/left-panel/left-panel.component';
import MainArea from '../../components/main-area/main-area.component';
import RightPanel from '../../components/right-panel/right-panel.component';
import './homepage.styles.scss';


const Homepage = ()=>(
    <div className='homepage'>
        <LeftPanel />
        <MainArea />
        <RightPanel />
    </div>
)

export default Homepage;
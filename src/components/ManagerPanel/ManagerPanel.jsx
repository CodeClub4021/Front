import { useState } from 'react'
import  './ManagerPanel.css'
import ShowStars from './ShowStars';

const ManagerPanel = () => {

    return (
        <>
            <div className="text-3xl text-center font-bold underline">
                <h1>Manager Panel</h1>
            </div>

            <div class="flex items-center">
                <ShowStars StarsNumbers='3'/>
            </div>
            
        </>
    );
}
 
export default ManagerPanel;
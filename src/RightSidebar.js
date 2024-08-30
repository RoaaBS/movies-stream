// RightSide.js
import React from 'react';
import './RightSide.css'; // Ensure you have the corresponding CSS file
import MediaServices from './assets/img/Media Services.png';
const RightSidebar = () => {
    return (
        
        <div className="right-side">
          <div class="rectangle"> </div>
   <div class="nav-right">
    <div>
        <img src={MediaServices} width="130"/>
    </div>

    <h3 class="Genre">Genre</h3>
<ul>
    <li>Action</li>
    <li> Comedy</li>
    <li>Drama</li>
    <li>Sci-Fi</li>
    <li class="Genre-Thriller">Thriller</li>
    <li>Westerrn</li>
</ul>
</div>
           
            
</div>
   
    );
};

export default RightSidebar;

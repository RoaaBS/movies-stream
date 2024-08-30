// BodyContent.js
import React from 'react';
import Navbar from './Navbar';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import ContentBody from './ContentBody';
import './BodyContent.css'; // Ensure you have the corresponding CSS file

const BodyContent = () => {
    return (
        <div className="body-content">
            
            <Navbar />
            <ContentBody/>
            <div className="content">
                <LeftSidebar />
                <RightSidebar />
            </div>
           
        </div>
    );
};

export default BodyContent;

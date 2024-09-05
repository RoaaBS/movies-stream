import React, { useState, useEffect } from 'react';
import Spinner from './componant/Spinner';
import Navbar from './componant/Navbar';
import LeftSidebar from './componant/LeftSide';
import RightSidebar from './componant/RightSide';
import ContentBody from './componant/contentBody/index';


const MainWrapper = () => {
  const [isLoading,setIsLoading] = useState(true);

  useEffect(() => {
    
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); 
  }, []);

  return (
    <div className="body-content">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Navbar />
          <ContentBody />
          <div className="content">
            <LeftSidebar />
            <RightSidebar />
          </div>
        </>
      )}
    </div>
  );
};

export default MainWrapper;

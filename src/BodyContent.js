import React, { useState, useEffect } from 'react';
import Spinner from './Spinner';
import Navbar from './Navbar';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import ContentBody from './ContentBody';
import './BodyContent.css';

const BodyContent = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a data fetch or loading
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust time as needed
  }, []);

  return (
    <div className="body-content">
      {loading ? (
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

export default BodyContent;

import React, { useState, useEffect } from "react";
import "./../styles/ShareForward.css";
import { Link, useParams } from "react-router-dom";

function ShareForward() {
  const { shareId } = useParams();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent || window.opera;
    if (/android|iPad|iPhone|iPod/i.test(userAgent)) {
      setIsMobile(true);
    }
  }, []);

  return (
    <div className="container">
      <div className="subContainer">
        <div className="hubContainer">
          <h1 className="title">Ayinu</h1>
          <h1 className="hubTheme">Tube</h1>
        </div>
        <h3 className="title">Check out this video</h3>
        {isMobile ? (
          <>
            <Link to={`ayinutube://watch/${shareId}`}>
              <button className="openButton">Open in app</button>
            </Link>
            <p className="warningMessage">
              Note: To access this content, please install the AyinuTube app.
            </p>
          </>
        ) : (
          <p className="warningMessage">This feature is not available on PC.</p>
        )}
      </div>
    </div>
  );
}

export default ShareForward;

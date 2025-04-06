import React from 'react';

    function Banner({ bannerImg }) {
      return (
        <div className="banner" style={{ backgroundImage: `url(${bannerImg})` }}>
          {/* Add additional content or styling here */}
        </div>
      );
    }

    export default Banner;

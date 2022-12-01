import React from 'react';
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

const Gallery = () => {
    return (
        <div>
           <div className="container">
               <LightGallery
                   speed={500}
                   plugins={[lgThumbnail, lgZoom]}
               >
                   <a href="/images/image1.jpeg">
                       <img alt="img2" src="/images/image1.jpeg" width="100"/>
                   </a>
                   <a href="/images/image2.jpeg">
                       <img alt="img2" src="/images/image2.jpeg" width="100"/>
                   </a>
                   <a href="/images/image3.jpeg">
                       <img alt="img2" src="/images/image3.jpeg" width="100"/>
                   </a>
               </LightGallery>
           </div>
        </div>
    );
};

export default Gallery;
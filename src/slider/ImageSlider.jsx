// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// // import './ImageSlider.css';
// import imageone from '../assets/slide4.jpg'
// import imagetwo from '../assets/slide5.jpg'
// import imagethree from '../assets/slide6.jpg'
// import imagefour from '../assets/slide2.jpg'


// const images = [

//    imagetwo,
//   imagethree,
//   imageone,
//  imagefour ,
//  ];

// const ImageSlider = () => {
  
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     nextArrow: <SampleNextArrow />,
//     prevArrow: <SamplePrevArrow />,
//     appendDots: dots => (
//       <div
//         style={{
//           bottom: '-30px',
//         }}
//       >
//         <ul style={{ margin: '0px' }}> {dots} </ul>
//       </div>
//     ),
//   };

//   return (
//     <Slider {...settings}>
//       {images.map((image, index) => (
//         <div key={index} className=''>
//           <img src={image} alt={`Slide ${index + 1}`} className="slide-image" />
//         </div>
//       ))}
//     </Slider>
//   );
// };

// const SampleNextArrow = (props) => {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: 'block', right: '10px', zIndex: '2', fontSize: '30px', top: '50%', transform: 'translateY(-50%)' }}
//       onClick={onClick}
//     />
//   );
// };

// const SamplePrevArrow = (props) => {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: 'block', left: '40px', zIndex: '2', fontSize: '30px', top: '50%', transform: 'translateY(-50%)' }}
//       onClick={onClick}
//     />
//   );
// };

// export default ImageSlider;
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import './ImageSlider.css';

const ImageSlider = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <div className="slide-content">First slide</div>
        </div>
        <div>
          <div className="slide-content">Second slide</div>
        </div>
        <div>
          <div className="slide-content">Third slide</div>
        </div>
        <div>
          <div className="slide-content">Fourth slide</div>
        </div>
      </Slider>
    </div>
  );
};

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block',
        //  background: 'rgba(0, 0, 0, 0.5)',/
          borderRadius: '50%', padding: '10px',right:'4%' }}
      onClick={onClick}
    />
  );
}

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', left:'2%',
        // background: 'rgba(0, 0, 0, 0.5)',
         borderRadius: '50%', padding: '10px' }}
      onClick={onClick}
    />
  );
}

export default ImageSlider;

import React from 'react'
import CarouselMap from './map/CarouselMap'
import Cardcss from '../Cardcss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SliderArrow from './sliderArrow'
import Container from '@material-ui/core/Container';

const Carousel01 = (props) => {
    

      
  const settings01 = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow:4 ,
    speed: 500,
 
  }
      
          const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "0px",
        slidesToShow: 7,
        speed: 500,
        
        responsive: [
       
          {
            breakpoint: 3000,
            settings: {
              slidesToShow: 6,
              centerPadding: "15px",

            }
          },
          {
            breakpoint: 2500,
            settings: {
              slidesToShow: 6,
              centerPadding: "120px",

            }
          },
          {
            breakpoint: 1900,
            settings: {
              slidesToShow: 6,
              centerPadding: "0px",

            }
          },
          {
            breakpoint: 1700,
            settings: {
              slidesToShow: 5,
              
            }
          },
          // 110
          {
            breakpoint: 1500,
            settings: {
              slidesToShow:4 ,
              centerPadding: "80px",

            }
          },
          // 125
          {
            breakpoint: 1300,
            settings: {
              slidesToShow:4 ,
              centerPadding: "0px",

            }
          },
          
          // 150
          {
            breakpoint: 1200,
            settings: {
              slidesToShow:3 ,
              centerPadding: "60px",

            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              centerPadding: "110px",

            }
          },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                centerPadding: "60px",

                
              
              }
            },
            {
              breakpoint: 731,
              settings: {
                slidesToShow: 1,
                centerPadding: "110px",

                
              
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                centerPadding: "60px",

                
              
              }
            },
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1,
                centerPadding: "0px",

                
              
              }
            }
          ]
      };
      const Arrau = [
          {image:"foodjpopenes01.jpg" , 
           Name:"Japonais"},
          {image:"food01.jpg" , 
            Name:"Américain" , 
            Note:98},
          {image:"Libanais.jpg" , 
          Name:"Libanais",
          Note:89},
          {image:"franies.jpg" , 
          Name:"Français",
          Note:89},
          {image:"Marconies.jpg" , 
          Name:"Marocain",
          Note:89},
          {image:"indien.jpg" , 
          Name:"Indien",
          Note:89},
          {image:"tunisien.jpg", 
          Name:"tunisien" ,
          Note:55 },
          {image:"Chinese.jpg",
         Name:"Chinois",
         Note:55},
          {image:"maxican.jpg" ,
          Name:"Mexicain",
          Note:60},
          {image:"pizza.jpg" , 
          Note:60,
        Name:"Italien ",
        },

      ]
      function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}
    return (
         
      <div>
        <div className="ResposiveCarousel" style={{marginLeft:"60px" , marginRight:"60px" }}>
        <Slider {...settings}>
                {Arrau.map((el)=><CarouselMap el={el}/>)}
        </Slider>
      </div>
      <div className="ResposiveCarousel02">  
        <Container>
       <Slider {...settings01}>
                {Arrau.map((el)=><CarouselMap el={el}/>)}
        </Slider>
        </Container>
      </div>
      </div>
    )
}

export default Carousel01

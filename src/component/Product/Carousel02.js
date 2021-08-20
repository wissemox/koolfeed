import React from 'react'
import CarouselMap from './map/CarouselMap02'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Container from '@material-ui/core/Container';

const Carousel01 = ({Catgories , setCatgories}) => {
    

      
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
            breakpoint: 8000,
            settings: {
              slidesToShow: 6,
              centerPadding: "0px",

            }
          },
          {
            breakpoint: 3100,
            settings: {
              slidesToShow: 5,
              centerPadding: "0px",

            }
          },
          {
            breakpoint: 2400,
            settings: {
              slidesToShow: 5,
              centerPadding: "80px",

            }
          },
          {
            breakpoint: 2200,
            settings: {
              slidesToShow: 6,
              centerPadding: "0px",

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
              centerPadding: "50px",

              
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
          {
            breakpoint: 1400,
            settings: {
              slidesToShow:3 ,
              centerPadding: "150px",

            }
          },
          // 125
          {
            breakpoint: 1300,
            settings: {
              slidesToShow:3 ,
              centerPadding: "90px",

            }
          },
          
          // 150
          {
            breakpoint: 1200,
            settings: {
              slidesToShow:5 ,
              centerPadding: "40px",

            }
          },
          {
            breakpoint: 1150,
            settings: {
              slidesToShow:4 ,
              centerPadding: "100px",

            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 4,
              centerPadding: "50px",

            }
          },
           
            {
              breakpoint: 908,
              settings: {
                slidesToShow: 4,
                centerPadding: "30px",

                
              
              }
            },
            {
              breakpoint: 898,
              settings: {
                slidesToShow: 3,
                centerPadding: "80px",

                
              
              }
            },

            {
              breakpoint: 808,
              settings: {
                slidesToShow: 2,
                centerPadding: "120px",

                
              
              }
            },
            {
              breakpoint: 731,
              settings: {
                slidesToShow: 2,
                centerPadding: "110px",

                
              
              }
            },

            {
              breakpoint: 701,
              settings: {
                slidesToShow: 2,
                centerPadding: "80px",

                
              
              }
            },
            {
              breakpoint: 690,
              settings: {
                slidesToShow: 2,
                centerPadding: "60px",

                
              
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                centerPadding: "40px",

                
              
              }
            },

            {
              breakpoint: 560,
              settings: {
                slidesToShow: 1,
                centerPadding: "100px",

                
              
              }
            },
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1,
                centerPadding: "90px",

                
              
              }
            },
            {
              breakpoint: 420,
              settings: {
                slidesToShow: 1,
                centerPadding: "50px",

                
              
              }
            },
            {
              breakpoint: 380,
              settings: {
                slidesToShow: 1,
                centerPadding: "35px",

                
              
              }
            },
            {
              breakpoint: 330,
              settings: {
                slidesToShow: 1,
                centerPadding: "15px",

                
              
              }
            },
            {
              breakpoint: 280,
              settings: {
                slidesToShow: 1,
                centerPadding: "0px",

                
              
              }
            }
          ]
      };
      const Arrau = [
          {image:"Japansec.jpg" , 
           Name:"Japonais"},
          {image:"Americanfood01.jpg" , 
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
          {image:"Maxican02.jpg" ,
          Name:"Mexicain",
          Note:60},
          {image:"Pizaaital.jpg" , 
          Note:60,
        Name:"Italien",
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
                    <p    className="text-2xl font-semibold leading-tight ml-14 absolute mt-2	" style={{height:""}}>Top Categories</p>

        <div className="HeaightCarosuel160"   style={{marginLeft:"60px"  ,   marginRight:"60px" }}>
        <Slider   {...settings}>
                {Arrau.map((el)=><CarouselMap Catgories={Catgories} setCatgories={setCatgories} el={el}/>)}
        </Slider>
      </div>
     
      </div>
    )
}

export default Carousel01

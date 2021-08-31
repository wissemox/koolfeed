import React ,{useState} from 'react'
import {
    Container,
    Box,
    Typography,
    IconButton,
    AppBar,
    Button,
    Input,
  } from "@material-ui/core";
  import MenuIcon from "@material-ui/icons/Menu";
  import MapPanier from './MapPanier/PanierMap'
const Panier = () => {
    const [FilterMenuTogel02, setFilterMenuTogel02] = useState(false);
    const [Scroll, setScroll] = useState(false);
    const [AllObjectPushed , setAllobjectPushed]=useState([{
      Name:"Pizza",
      Price:15, 
      Image:"Pizaaimage.jpg",
      Quantity:50
    },{
      Name:"Maxican02",
      Price:15, 
      Image:"Maxican02.jpg",
      Quantity:50
    },
    {
      Name:"Marconies",
      Price:15, 
      Image:"Marconies.jpg",
      Quantity:50
    }])

    const changeBackground = () => {
        if (window.scrollY == 0) {
          setScroll(false);
        } else {
          setScroll(true);
        }
      };
      // Scon change background navbar from white to orange
      window.addEventListener("scroll", changeBackground);
    return (
        <div>
             <AppBar
        position="fixed"
        style={{
          backgroundColor: Scroll ? "#FA663C" : "white",
          boxShadow: "none",
        }}
      >
        {/* Modal Design here  */}
      
        {/* Modal here */}

        {/* Box here ALL navbar */}

        <Box className="shadow-sm   ">
          <div
            style={{
              maxWidth: "1500px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            className={`flex margin  `}
          >
            <div className="flex  w-6-12 ">
              {/* Flexendstart */}

              {/* <MenuIcon  onClick={()=>setFilterMenuTogel(!MenuTogel)} className="mt-6 ml-10 DisplayNoneMenuProduct" style={{color:"#504D48"}}/> */}
              <div className="ml-140Resposive   marginBottom20Resposive mt-10 mb-10">
                {/* Image */}
                {!Scroll && (
                  <img
                    className="w-50Reposive50 "
                    src={process.env.PUBLIC_URL + "/logowithbackround.svg"}
                  />
                )}

                {/* logobackground */}
                {Scroll && (
                  <img
                    className="w-50Reposive50 "
                    src={process.env.PUBLIC_URL + "/logobackground.svg"}
                  />
                )}
              </div>
            </div>
            {/* Text ACCUEIL NOTRE . . */}
            <div className="justify-end marginLeaftResposiveNavbar flex w-6-12">
              {/* Flexendhere */}

              {/* Text on togel */}
              <div className="DiplayNoneResposive600 m-7">
                <MenuIcon
                  onClick={() => setFilterMenuTogel02(!FilterMenuTogel02)}
                  style={{ color: Scroll ? "white" : "#504D48" }}
                />
              </div>
              <div className="pt-8 DisplayNooneReposive700TextProduct ml-40 font-semibold fontsizeResposive16 marginRight120Repsosive">
                {/* Text */}
                <Typography
                  style={{ color: Scroll ? "white" : "#504D48" }}
                  className="p-2"
                  variant="p"
                >
                  Accueil
                </Typography>
                <Typography
                  style={{ color: Scroll ? "white" : "#504D48" }}
                  className="p-2 curser"
                  variant="p"
                >
                  Notre concept{" "}
                </Typography>

                <Typography
                  style={{ color: Scroll ? "white" : "#504D48" }}
                  className="p-2"
                  variant="p"
                >
                  Blog
                </Typography>
                <Typography
                  style={{ color: Scroll ? "white" : "#504D48" }}
                  className="p-2"
                  variant="p"
                >
                  {" "}
                  Connexion
                </Typography>
              </div>
            </div>
          </div>
        </Box>
      </AppBar>
      <div className="BackgroundimageFullimage008 ">
        <Container>
          <div
            className="flex text-5xl	PaddinngDatitedProductName 	justify-center"
          >
            <div>
              <p>Panier</p>
          
            </div>
          </div>
        </Container>
        {/* PararleexEffect  */}
      </div>
      {/* Tableo */}
            <div  className="flex justify-center text-base	 font-medium mb-12	 mt-12 ml-12">
                <Container>
                    <div style={{border:"solid 1px #D2D4D6" , width:"95%"}} className="flex text-center">
                        <div className="p-4" style={{width:"12%"  ,borderRight:"solid 1px #DEE2E6"}}>
                            <p>Remove</p>
                        </div>

                        <div className="p-4" style={{width:"20%"  ,borderRight:"solid 1px #DEE2E6"}}>
                            <p>Images</p>
                        </div>

                        <div className="p-4" style={{width:"30%"  ,borderRight:"solid 1px #DEE2E6"}} >
                            <p>Product</p>
                        </div>

                        <div className="p-4" style={{width:"15%"  ,borderRight:"solid 1px #DEE2E6"}}>
                            <p>Unite Price</p>
                        </div>

                        <div className="p-4" style={{width:"15%"  ,borderRight:"solid 1px #DEE2E6"}}>
                            <p>Quantity</p>
                        </div>

                        <div className="p-4" style={{width:"12%"  ,borderRight:"solid 1px #DEE2E6"}}>
                            <p>Total</p>
                        </div>
                    </div>

                    <div className="">
                      {AllObjectPushed.map((el)=><MapPanier el={el}/>)}
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Panier

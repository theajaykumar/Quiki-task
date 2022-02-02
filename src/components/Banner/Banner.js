// import React from 'react';
// import { Container, makeStyles, Typography } from '@material-ui/core';
// import { mergeClasses } from '@material-ui/styles';
// import Carousel from './Carousel';

// const useStyles = makeStyles(()=> ({
//     banner: {
//         // backgroundImage: "url(./banner.jpg)",
//         backgroundColor:"white",
//     },
//    bannerContent: {
//        height: 400,
//        display: "flex",
//        flexDirection: "column",
//        paddingTop: 25,
//     justifyContent: "space-around" 
//   },
//   tagline: {
//       display: "flex",
//       height: "40%",
//       flexDirection: "column",
//       justifyContent: "center",
//       textAlign: "center",
//   }

// }));
// const Banner = () => {
//     const classes = useStyles();
//   return (
//   <div className={classes.banner}>
//       <Container className={classes.bannerContent}>
//           <div className={classes.tagline}>
//         <Typography
//         variant='h2'
//         style={{
//             fontWeight: "bold",
//             marginBottom: 15,
//             fontFamily: "Montserrat",
//         }}>
//             Crypto Hunter
//         </Typography>
//         <Typography
//         variant='subtitle2'
//         style={{
//             color: "darkgrey",
//              textTransform: "capitalize",
//             fontFamily: "Montserrat",
//         }}>
//             Get all the info regarding your favorite Crypto C urrency
//         </Typography>
//           </div>
//           <Carousel />
//           </Container>

//   </div>
//   )};

// export default Banner;


import { Container, makeStyles, Typography } from "@material-ui/core";
import Carousel from "./Carousel";

const useStyles = makeStyles((theme) => ({
  banner: {
    backgroundColor:"white",
  },
  bannerContent: {
    height: 150,
    // display: "flex",
    flexDirection: "column",
    paddingTop: 25,
    justifyContent: "space-around",
  },
  tagline: {
    // display: "flex",
    height: "20%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
  carousel: {
    height: "50%",
    display: "flex",
    alignItems: "center",
  },
}));

function Banner() {
  const classes = useStyles();

  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
            }}
          >
            <h4>
              

                <span style={{color:"orange"}}> Q</span>
                <span  style={{color:"pink"}}>U</span>
                <span  style={{color:"#4A171E"}}>I</span>
                <span  style={{color:"green"}}>K</span>
                <span  style={{color:"#B88746"}}>I</span>
                <span  style={{color:"#013DC4"}}>A</span>
                <span  style={{color:"#533549"}}>P</span>
                <span  style={{color:"#616161"}}>P</span>
                <span  style={{color:"#96351E"}}>S</span>

            </h4>
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: "darkgrey",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
            }}
          >
           Custom Software Development Services
          </Typography>
        </div>
        {/* <Carousel /> */}
      </Container>
    </div>
  );
}

export default Banner;
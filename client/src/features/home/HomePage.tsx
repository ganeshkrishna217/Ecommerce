import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function HomePage() {
  const settings = {
    dots: true, // Enables dots navigation
    infinite: true, // Allows infinite loop sliding
    speed: 500, // Speed of transition between slides
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Enables automatic sliding
    autoplaySpeed: 2000, // Sets the duration before switching to the next slide (3 seconds)
  };
  return (
    <>
      <Slider {...settings}>
        <div>
          <img
            src="/images/Homepage1.jpg"
            alt="Loading img ..."
            style={{
              display: "block",
              width: "100%",
              maxHeight: 400,
            }}
          />
        </div>
        <div>
          <img
            src="/images/Homepage2.jpg"
            alt="Loading img ..."
            style={{
              display: "block",
              width: "100%",
              maxHeight: 400,
            }}
          />
        </div>
        <div>
          <img
            src="/images/Homepage3.jpg"
            alt="Loading img ..."
            style={{
              display: "block",
              width: "100%",
              maxHeight: 400,
            }}
          />
        </div>
        <div>
          <img
            src="/images/Homepage4.jpg"
            alt="Loading img ..."
            style={{
              display: "block",
              width: "100%",
              maxHeight: 400,
            }}
          />
        </div>
      </Slider>
      <Box display="flex" justifyContent="center" sx={{ mt: 1 }}>
        <Typography variant="h1">Welcome to the store!</Typography>
      </Box>
      <Box display="flex" justifyContent="center">
        <Typography variant="h4">
          We always have the best choice for you
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center">
        <Button
          variant="contained"
          size="large"
          component={Link}
          to="/catalog"
          sx={{
            backgroundColor: "#00897b",
            "&:hover": { backgroundColor: "#424242" },
          }}
          endIcon={<ShoppingCartIcon />}
        >
          Shop Now
        </Button>
      </Box>
    </>
  );
}

export default HomePage;

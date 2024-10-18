import {
  Divider,
  // Alert,
  // AlertTitle,
  // Button,
  // ButtonGroup,
  // Container,
  // List,
  // ListItem,
  // ListItemText,
  Typography,
} from "@mui/material";
// import agent from "../../app/api/agent";
// import { useState } from "react";

function AboutPage() {
  // const [validationErrors, setValidationErrors] = useState<string[]>([]);
  // function getValidationError() {
  //   agent.TestErrors.getValidationError()
  //     .then(() => console.log("should never see this"))
  //     .catch((error) => setValidationErrors(error));
  // }
  return (
    <div>
      <Typography variant="h3" sx={{ p: 2 }}>
        About us
      </Typography>
      <Divider />
      <Typography variant="h5" sx={{ p: 2 }}>
        At BKG_Store, we are a passionate team dedicated to delivering
        exceptional shopping experiences for our customers. Our mission is
        simple: to provide high-quality products with a focus on customer
        satisfaction and convenience. We believe in the power of a well-curated
        product selection and an intuitive shopping journey, allowing customers
        to discover what they love effortlessly.
      </Typography>
      <Typography variant="h5" sx={{ p: 2 }}>
        With outlets and stores located across the country, BKG_Store ensures
        that no matter where you are, a trusted shopping experience is within
        reach. Our widespread presence means that you can explore and purchase
        your favorite products both online and in-store, making us a reliable
        companion for all your shopping needs.
      </Typography>
      <Typography variant="h5" sx={{ p: 2 }}>
        We take pride not only in serving customers but also in giving back to
        the communities we are a part of. Our commitment to community engagement
        involves partnering with local organizations, supporting causes that
        matter, and fostering positive relationships with customers and vendors
        alike. At BKG_Store, we strive to create spaces—both digital and
        physical—that bring people together, making meaningful connections while
        delivering value.
      </Typography>
      <Typography variant="h5" sx={{ p: 2 }}>
        We believe that a brand's true impact lies in its ability to make a
        difference. That’s why we are always looking for ways to contribute,
        build trust, and strengthen our bond with the communities we serve.
      </Typography>
      <Typography variant="h5" sx={{ p: 2 }}>
        At BKG_Store, our goal is to build lasting connections by combining
        exceptional service, thoughtful solutions, and a seamless shopping
        experience tailored to each customer’s needs. Your satisfaction is our
        top priority.
      </Typography>
    </div>
    // // <Container>
    //   {/* <Typography gutterBottom variant="h2">
    //     Testing errors
    //   </Typography>
    //   <ButtonGroup fullWidth>
    //     <Button
    //       variant="contained"
    //       onClick={() =>
    //         agent.TestErrors.get400error().catch((error) => console.log(error))
    //       }
    //     >
    //       Test 400 error
    //     </Button>
    //     <Button
    //       variant="contained"
    //       onClick={() =>
    //         agent.TestErrors.get401error().catch((error) => console.log(error))
    //       }
    //     >
    //       Test 401 error
    //     </Button>
    //     <Button
    //       variant="contained"
    //       onClick={() =>
    //         agent.TestErrors.get404error().catch((error) => console.log(error))
    //       }
    //     >
    //       Test 404 error
    //     </Button>
    //     <Button
    //       variant="contained"
    //       onClick={() =>
    //         agent.TestErrors.get500error().catch((error) => console.log(error))
    //       }
    //     >
    //       Test 500 error
    //     </Button>
    //     <Button variant="contained" onClick={getValidationError}>
    //       Test validation error
    //     </Button>
    //   </ButtonGroup>
    //   {validationErrors.length > 0 && (
    //     <Alert severity="error">
    //       <AlertTitle>Validation Errors</AlertTitle>
    //       <List>
    //         {validationErrors.map((error) => (
    //           <ListItem key={error}>
    //             <ListItemText>{error}</ListItemText>
    //           </ListItem>
    //         ))}
    //       </List>
    //     </Alert>
    //   )}
    // </Container> */}
  );
}
export default AboutPage;

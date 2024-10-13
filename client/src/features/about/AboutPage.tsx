import {
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
      <Typography variant="h3" sx={{ p: 4 }}>
        About — We’re a globally distributed team driven by a shared mission: to
        help our clients succeed through thoughtful, customer-centric solutions.
      </Typography>
      <Typography variant="h6" sx={{ p: 4 }}>
        We believe in the positive impact a brand can have on people’s lives,
        and approach every project from the perspective of the customer. Lucky
        for us—our clients are often are favorite brands. Our goal is to create
        experiences that resonate, add value, and help brands build lasting
        connections with their communities.
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

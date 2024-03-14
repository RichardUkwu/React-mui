import { Box, Button, Container, TextField, Typography } from "@mui/material";
function Contact() {
  return (
    <Container sx={{ marginTop: "100px", width: "600px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Box>
          <Typography variant="h6" component={"h2"}>
            Contact Us
          </Typography>
          <Typography variant="body2">
            Need Assistance? send us a direct message now
          </Typography>
        </Box>
        <Box
          sx={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            gap: "20px"
          }}
        >
          <TextField
            id="standard-basic"
            label="First Name"
            variant="standard"
          />
          <TextField id="standard-basic" label="Last Name" variant="standard" />
          <Button variant="contained">Start</Button>
        </Box>
      </Box>
    </Container>
  );
}
export default Contact;

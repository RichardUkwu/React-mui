import { Box, Button, Container, Paper, Typography } from "@mui/material";

const serviceList = ["service 1", "service 2", "service 3"];

function Services() {
  return (
    <Container>
      <Typography
        variant="h6" component={'h2'}
        sx={{ my: 4, textAlign: "center", color: "primary.main" }}
      >
        Services
      </Typography>
      <Box
        sx={{
          pt: 4,
          display: "flex",
          flexDirection: {xs: 'column', md: 'row'},
          justifyContent: "space-between",
          gap: 4,
        }}
      >
        {serviceList.map((service) => (
          <Paper elevation={3} sx={{width: {xs: 1, md: 320}}}>
            <Box sx={{ m: 3 }}>
              <Typography variant="h3">{service}</Typography>
              <Typography sx={{ mt: 2 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Augue interdum velit euismod in pellentesque massa placerat.
                Lacus laoreet non curabitur gravida arcu ac tortor dignissim.
                Sit amet mattis vulputate enim nulla aliquet porttitor. Tempor
                commodo ullamcorper a lacus vestibulum sed. Adipiscing elit
                pellentesque habitant morbi. Id donec ultrices tincidunt arcu
                non sodales. Ipsum consequat nisl vel pretium lectus. Porta nibh
                venenatis cras sed. Vestibulum sed arcu non odio euismod. Id
                faucibus nisl tincidunt eget nullam non. Id volutpat lacus
                laoreet non curabitur gravida arcu ac. Id interdum velit laoreet
                id donec ultrices.
              </Typography>
              <Button variant="contained">Learn more</Button>
            </Box>
          </Paper>
        ))}
      </Box>
    </Container>
  );
}

export default Services;
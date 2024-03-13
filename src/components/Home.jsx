import { Link } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Typography,
} from "@mui/material";


function Home() {
  const Stuff = [
    "Services",
    "Contact",
    "About Us"
    
  ];
  return (
    <div>
      <Container>
        <Divider />
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          mx={"30px"}
          my={"10px"}
        >
          {Stuff.map((stuff, index) => (
            <Typography
              variant="body2"
              component={"p"}
              sx={{ textDecoration: "underline" }}
              key={index}
            >
              <Link to={`/${stuff}`}>{stuff}</Link>
            </Typography>
          ))}
        </Box>
        <Card>
          <CardMedia
            component="img"
            alt="Post"
            height="350"
            image="src\assets\Post.jpg"
          />
        </Card>
        <Box
          my={"30px"}
          height={"350px"}
          display={"flex"}
          justifyContent={"space-between"}
        >
          <Box>
            <Card elevation={5} sx={{ maxWidth: 430 }}>
              <CardMedia
                component="img"
                alt="Post"
                height="200"
                image="src\assets\Post.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Featured Post
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Nov 12
                </Typography>
                <Typography variant="body1" color="text.primary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
              </CardContent>
            </Card>
          </Box>
          <Box>
            <Card elevation={5} sx={{ maxWidth: 430 }}>
              <CardMedia
                component="img"
                alt="Post"
                height="200"
                image="src\assets\Post.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Post title
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Nov 12
                </Typography>
                <Typography variant="body1" color="text.primary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default Home;
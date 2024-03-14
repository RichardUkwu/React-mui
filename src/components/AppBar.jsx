import { Box, Button, Container, Typography } from "@mui/material";
import * as React from "react";
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";

export default function ButtonAppBar() {

  return (
    <Container sx={{display: 'flex',justifyContent: 'space-between', my: '0.5rem',}}>
      <Box>
        <Button variant="contained">SUBSCRIBE</Button>
      </Box>
      <Box>
        <Typography  variant="h6" component={'h2'}><Link className="link" to={'/'}>My Blog</Link></Typography>
      </Box>
      <Box sx={{display: 'flex',justifyContent: 'space-between', alignItems: 'center', gap: '4px'}}>
        <Box>
          <SearchIcon />
        </Box>
        <Box>
          <Button variant="outlined">SIGN UP</Button>
        </Box>
      </Box>
    </Container>
    
  );
}
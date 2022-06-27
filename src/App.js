import "./App.css";
import TourCard from "./components/TourCard";
import { Container, Grid, Typography } from "@mui/material";
import Appbar from "./components/Appbar";
import cities from "./data.json";

function App() {
  return (
    <div className="App">
      <Appbar />
      <Container sx={{ marginY: 5 }}>
        {cities.map((city) => (
          <>
            <Typography
              variant="h4"
              component="h2"
              marginTop={5}
              marginBttom={3}
            >
              Top {city.name} Tours
            </Typography>
            <Grid container spacing={5}>
              {city.tours.map((tour, index) => (
                <TourCard tour={tour} key={index} />
              ))}
            </Grid>
          </>
        ))}
      </Container>
    </div>
  );
}

export default App;

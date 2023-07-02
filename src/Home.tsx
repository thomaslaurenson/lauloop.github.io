import { Grid, Typography } from '@mui/material';

function Home() {
  return (
    <Grid
      container
      spacing={2}
      direction="column"
      justifyContent="center"
      alignItems="center"
    //   sx={{ minHeight: "100%" }}
      >
      <Grid item>
        <Typography variant="h2">lauloop</Typography>
      </Grid>
      <Grid item>
      <Typography variant="h5">coming soon</Typography>
      </Grid>
    </Grid>
  )
}

export default Home

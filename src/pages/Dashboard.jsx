import React from 'react';
import { Box, Grid, Card, CardContent, Typography } from '@mui/material';
import ProductsTable from './ProductsTable';

const Dashboard = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <Typography variant="h5">Card 1</Typography>
              <Typography>Content 1</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <Typography variant="h5">Card 2</Typography>
              <Typography>Content 2</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <Typography variant="h5">Card 3</Typography>
              <Typography>Content 3</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Box sx={{ mt: 4 }}>
        <ProductsTable />
      </Box>
    </Box>
  );
};

export default Dashboard;

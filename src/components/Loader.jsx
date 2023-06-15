import { CircularProgress, Grid } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';

export const Loader = () => {
    return (
        <Container>
            <Grid
                container
                style={{ height: window.innerHeight - 50 }}
                alignItems="center"
                justifyContent="center">
                <Grid container alignItems="center" direction="column">
                    <CircularProgress />
                </Grid>
            </Grid>
        </Container>
    );
};

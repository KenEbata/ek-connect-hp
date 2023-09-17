import { Container, Typography, Box, Grid } from '@mui/material';

const Services = () => {
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" className="text-center mb-8">
          サービス
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Box className="mb-6">
              <Typography variant="h5" className="mb-2">
                サービス1
              </Typography>
              <Typography variant="body2">
                サービス1に関する詳細や特徴をここに記述します。どのような価値を提供しているのかを説明すると良いでしょう。
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box className="mb-6">
              <Typography variant="h5" className="mb-2">
                サービス2
              </Typography>
              <Typography variant="body2">
                サービス2に関する詳細や特徴をここに記述します。どのような価値を提供しているのかを説明すると良いでしょう。
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box className="mb-6">
              <Typography variant="h5" className="mb-2">
                サービス3
              </Typography>
              <Typography variant="body2">
                サービス3に関する詳細や特徴をここに記述します。どのような価値を提供しているのかを説明すると良いでしょう。
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Services;

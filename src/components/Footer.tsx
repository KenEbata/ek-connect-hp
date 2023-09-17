import Link from 'next/link';
import { Container, Typography, Box, Grid } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" className="bg-gray-800 py-6">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" className="text-white">
              企業名
            </Typography>
            <Typography variant="body2" className="text-gray-400 mt-2">
              〒123-4567
              <br />
              東京都新宿区○○○
              <br />
              012-345-6789
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" className="text-white">
              リンク
            </Typography>
            <ul className="text-gray-400">
              <li className="mt-2">
                <Link href="/about" passHref>
                  会社概要
                </Link>
              </li>
              <li className="mt-2">
                <Link href="/services" passHref>
                  サービス
                </Link>
              </li>
              <li className="mt-2">
                <Link href="/contact" passHref>
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" className="text-white">
              SNS
            </Typography>
            <ul className="text-gray-400">
              <li className="mt-2">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </li>
              <li className="mt-2">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li className="mt-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </Grid>
        </Grid>
        <Typography variant="body2" className="text-gray-400 mt-6 text-center">
          © 2023 企業名. All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;

import { Container, Typography, Box } from '@mui/material';

const About = () => {
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" className="text-center mb-8">
          会社概要
        </Typography>

        <Box className="mb-6">
          <Typography variant="h5" className="mb-2">
            企業情報
          </Typography>
          <Typography variant="body2">
            社名: 企業名
            <br />
            設立: 2000年1月1日
            <br />
            代表者: 代表者名
            <br />
            住所: 企業の住所
            <br />
            事業内容: 企業の事業内容をここに記載します。
            <br />
          </Typography>
        </Box>

        <Box className="mb-6">
          <Typography variant="h5" className="mb-2">
            ミッション
          </Typography>
          <Typography variant="body2">
            企業のミッションをここに記載します。何を目指しているのか、どのような価値を提供しているのかを説明します。
          </Typography>
        </Box>

        <Box className="mb-6">
          <Typography variant="h5" className="mb-2">
            ビジョン
          </Typography>
          <Typography variant="body2">
            企業のビジョンをここに記載します。将来どのような企業になりたいのか、どのような世界を目指しているのかを説明します。
          </Typography>
        </Box>

        <Box className="mb-6">
          <Typography variant="h5" className="mb-2">
            価値観
          </Typography>
          <Typography variant="body2">
            企業の価値観をここに記載します。企業文化や哲学を説明することで、訪問者に企業の人柄を見せることができます。
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default About;

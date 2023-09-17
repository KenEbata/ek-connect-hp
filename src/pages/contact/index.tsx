import React, { useState } from 'react';
import { Container, Typography, Box, TextField, Button } from '@mui/material';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form data submitted', formData);
  };

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" className="text-center mb-8">
          お問い合わせ
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ '& .MuiTextField-root': { m: 1, width: '100%' } }}
        >
          <TextField
            label="お名前"
            variant="outlined"
            name="name"
            value={formData.name}
            onChange={handleChange}
            sx={{ backgroundColor: '#fff' }}
          />
          <TextField
            label="メールアドレス"
            variant="outlined"
            name="email"
            value={formData.email}
            onChange={handleChange}
            sx={{ backgroundColor: '#fff' }}
          />
          <TextField
            label="メッセージ"
            variant="outlined"
            name="message"
            value={formData.message}
            onChange={handleChange}
            multiline
            rows={4}
            sx={{ backgroundColor: '#fff' }}
          />
          <Box sx={{ display: 'flex', justifyContent: 'center', m: 2 }}>
            <Button variant="contained" type="submit">
              送信
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Contact;

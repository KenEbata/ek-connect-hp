import { useState } from 'react';
import Link from 'next/link';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/system';

const NavButton = styled(Button)`
  margin-left: 1rem;
`;

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar position="static" className="bg-gray-800">
      <Toolbar className="justify-between">
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          className="md:hidden"
        >
          <MenuIcon />
        </IconButton>
        <Link href="/" passHref>
          <Typography
            variant="h6"
            component="div"
            className="cursor-pointer text-white"
          >
            企業名
          </Typography>
        </Link>
        <div className="hidden md:flex">
          <Link href="/about" passHref>
            <NavButton color="inherit">会社概要</NavButton>
          </Link>
          <Link href="/services" passHref>
            <NavButton color="inherit">サービス</NavButton>
          </Link>
          <Link href="/contact" passHref>
            <NavButton color="inherit">お問い合わせ</NavButton>
          </Link>
        </div>
      </Toolbar>
      <Drawer
        variant="temporary"
        anchor={'left'}
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        <List>
          {['会社概要', 'サービス', 'お問い合わせ'].map((text, index) => (
            <ListItem button key={text} onClick={handleDrawerToggle}>
              <Link href={['/about', '/services', '/contact'][index]} passHref>
                <Typography
                  variant="body1"
                  className="block w-full px-4 py-2 text-gray-800"
                >
                  {text}
                </Typography>
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Header;

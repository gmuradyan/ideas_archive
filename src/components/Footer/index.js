import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

import styles from './index.module.scss';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Footer = () => {
  return (
    <div id={styles.footer}>
      <CssBaseline />
      <footer>
        <Container maxWidth="sm">
          <Typography variant="body1"> Ideas Archive</Typography>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}

export default Footer;
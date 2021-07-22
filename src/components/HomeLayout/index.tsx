import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';

import Navbar from 'components/Navbar';

import theme from './theme.module.scss';

const HomeLayout: FC = (props) => {
  return (
    <div className={theme.adminLayout}>
      <Navbar />
      <Grid container spacing={0} style={{ justifyContent: 'center', height: '100%' }}>
        <Grid item xs={12} sm={10} md={10} lg={10} xl={10}>
          <div className={theme.container}>{props.children}</div>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomeLayout;

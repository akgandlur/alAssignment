import React from 'react';
import { Grid } from '@material-ui/core';

import theme from './theme.module.scss';

function Navbar() {
  return (
    <div className={theme.navbar}>
      <Grid container spacing={0} style={{ justifyContent: 'center', height: '100%' }}>
        <Grid item xs={12} sm={10} md={10} lg={10} xl={10}>
          <div className={theme.container}>
            <div className={theme.organization}>
              <span className={theme.name}>LEDGER.</span>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Navbar;

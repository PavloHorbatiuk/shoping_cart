import { Box, Button, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import * as React from 'react';

import { PRODUCTS_MAP, ShoppingCartItem } from '../models';

const TotalWrapper = styled(Box)(() => ({
  paddingTop: 40,
}));

type TotalProps = {
  items: ShoppingCartItem[];
  handlerClear: () => void;
};

const Total: React.FC<TotalProps> = ({ items, handlerClear }) => {
  const totalValue = items.reduce((acc, item) => {
    const price = PRODUCTS_MAP[item.productId]?.price || 0;
    acc += item.quantity * price;

    return acc;
  }, 0);

  return (
    <TotalWrapper>
      <Grid container>
        <Grid item xs={6}>
          <Typography>{`Total: $${totalValue}`}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Button
            onClick={() => {
              handlerClear();
            }}
            variant="outlined"
          >
            Clear
          </Button>
        </Grid>
      </Grid>
    </TotalWrapper>
  );
};

export default Total;

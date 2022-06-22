import { Box, Button, FormControl, MenuItem, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import { ChangeEvent } from 'react';

import { ALL_PRODUCTS, ShoppingCartItem } from '../models';

const AddItemBox = styled(Box)(() => ({
  display: 'flex',
  flex: 1,
  marginTop: '25px',
}));

const ItemSelectWrapper = styled(FormControl)(() => ({
  width: '200px',
  marginRight: '20px',
}));

const QuantityInputWrapper = styled(FormControl)(() => ({
  width: '80px',
  marginRight: '20px',
}));

type AddItemFormProps = {
  addItems: (productId: string, quantity: number) => void;
};

const AddItemForm: React.FC<AddItemFormProps> = ({ addItems }) => {
  const [productId, setProductId] = React.useState<string>('');
  const [quantity, setQuantity] = React.useState<number>(0);
  const changeHandlerId = (event: ChangeEvent<HTMLInputElement>) => {
    setProductId(event.target.value);
  };
  const changeHandlerQuantity = (event: ChangeEvent<HTMLInputElement>) =>
    setQuantity(Number(event.target.value));
  const clickHandler = () => {
    addItems(productId, quantity);
  };
  return (
    <AddItemBox>
      <ItemSelectWrapper>
        <TextField
          onChange={changeHandlerId}
          select
          value={productId}
          label="Item"
        >
          {ALL_PRODUCTS.map((product) => (
            <MenuItem key={product.id} value={product.id}>
              {product.label}
            </MenuItem>
          ))}
        </TextField>
      </ItemSelectWrapper>
      <QuantityInputWrapper>
        <TextField
          onChange={changeHandlerQuantity}
          label="Quantity"
          type="number"
          InputProps={{ inputProps: { min: 0, max: 20 } }}
          value={quantity}
        />
      </QuantityInputWrapper>
      <Button
        onClick={clickHandler}
        variant="contained"
        disabled={!quantity || !productId}
      >
        Add
      </Button>
    </AddItemBox>
  );
};

export default AddItemForm;

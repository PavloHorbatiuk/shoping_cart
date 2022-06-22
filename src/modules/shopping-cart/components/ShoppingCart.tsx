import { Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import * as React from 'react';

import { ShoppingCartItem } from '../models';

import AddItemForm from './AddItemForm';
import ItemsList from './ItemsList';
import Total from './Total';

const ShoppingCardWrapper = styled(Paper)(() => ({
  width: 600,
  margin: 'auto',
  padding: 50,
  minHeight: 500,
}));

const ShoppingCartHeader = styled(Typography)(() => ({
  textTransform: 'uppercase',
  fontWeight: 'bold',
  fontSize: 24,
}));

const ShoppingCart = () => {
  const [items, setItems] = React.useState<ShoppingCartItem[]>([]);

  const addItems = (id: string, quantity: number) => {
    const sameItems = items.some((f) => id === f.productId);
    if (!sameItems) {
      setItems([...items, { productId: id, quantity: quantity }]);
    } else {
      const addSame = items.map((f) =>
        id === f.productId ? { ...f, quantity: f.quantity + quantity } : f
      );
      setItems(addSame);
    }
  };
  function increment(id: string) {
    const increase = items.map((f) =>
      f.productId === id ? { ...f, quantity: f.quantity + 1 } : f
    );
    setItems(increase);
  }
  function decrement(id: string) {
    const filteredArray = items.filter((f) => f.productId !== id);
    const minus = items.map((f) =>
      f.productId === id
        ? {
            ...f,
            quantity: f.quantity - 1,
          }
        : f
    );
    const validation = minus.some((f) => f.quantity === 0);
    if (!validation) {
      setItems(minus);
    } else {
      setItems(filteredArray);
    }
  }
  function deletePruduct(id: string) {
    const product = items.filter((f) => f.productId !== id);
    setItems(product);
  }
  const handlerClear = () => setItems([]);
  return (
    <ShoppingCardWrapper>
      <ShoppingCartHeader>Shopping Cart</ShoppingCartHeader>
      <AddItemForm addItems={addItems} />
      {!!items.length && (
        <React.Fragment>
          <ItemsList
            deletePruduct={deletePruduct}
            clickHandlerQuantity={increment}
            clickHandlerQuantityDec={decrement}
            items={items}
          />
          <Total handlerClear={handlerClear} items={items} />
        </React.Fragment>
      )}
    </ShoppingCardWrapper>
  );
};

export default ShoppingCart;

import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar } from '@mui/material';

const products = [
  {
    id: 1,
    name: 'Produto 1',
    description: 'Descrição do produto 1',
    image: 'https://via.placeholder.com/40',
    stock: 10,
    price: 100,
    sold: 5,
  },
  {
    id: 2,
    name: 'Produto 2',
    description: 'Descrição do produto 2',
    image: 'https://via.placeholder.com/40',
    stock: 20,
    price: 200,
    sold: 10,
  },
  // Adicione mais produtos conforme necessário
];

const ProductsTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Foto</TableCell>
            <TableCell>Nome</TableCell>
            <TableCell>Descrição</TableCell>
            <TableCell>Quantidade em Estoque</TableCell>
            <TableCell>Valor</TableCell>
            <TableCell>Quantidade Vendida</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>
                <Avatar src={product.image} />
              </TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.description}</TableCell>
              <TableCell>{product.stock}</TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>{product.sold}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductsTable;

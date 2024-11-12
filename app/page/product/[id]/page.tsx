import React from 'react';

type ProductsProps = {
  params: {
    id: string;
  };
};

export default function Products({ params }: ProductsProps) {
  const { id } = params;

  return (
    <div>
      <h1>Product: {id}</h1>
    </div>
  );
}

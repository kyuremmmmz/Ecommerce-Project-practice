import React from 'react';

export default async function Products({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Product: {params.id}</h1>
    </div>
  );
}

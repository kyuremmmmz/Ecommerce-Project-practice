import React from 'react';

export default async function Products({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  return (
    <div>
      <h1>Product: {id}</h1>
    </div>
  );
}

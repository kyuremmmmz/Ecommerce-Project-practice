import React from 'react';

interface PageProps {
  params: {
    id: string;
  };
}

export default function Products({ params }: PageProps) {
  const { id } = params;

  return (
    <div>
      <h1>Product: {id}</h1>
    </div>
  );
}

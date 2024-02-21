'use client'

import React from 'react';
import { UpdateAuctionTest } from '../actions/auctionActions';
import { Button } from 'flowbite-react';

export default function AuthTest() {

  const [loading, setLoading] = React.useState(false);
  const [result, setResult] = React.useState<any>();

  function doUpdate() {
    setResult(undefined);
    setLoading(true);
    UpdateAuctionTest()
      .then(result => setResult(result))
      .finally(() => setLoading(false));
  }

  return (
    <div className='flex items-center gap-4'>
      <Button outline isProcessing={loading} onClick={doUpdate}>
        Test Auth
      </Button>
      <div className='text-gray-400'>
        {JSON.stringify(result, null, 2)}
      </div>
    </div>
  )
}
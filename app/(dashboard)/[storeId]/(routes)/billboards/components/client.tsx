"use client";

import React from 'react';
import { useParams, useRouter } from 'next/navigation';


import { Button } from '@/components/ui/button';
import Heading from '@/components/ui/heading';
import { Plus } from 'lucide-react';
import { Separator } from '@/components/ui/separator';


function Client() {

    const router = useRouter();
    const params = useParams();

  return (
    <>
        <div className='flex items-center justify-between'>
            <Heading title='Billboards (0)' description='Manege billboards for your store'/>
            <Button onClick={() => router.push(`/${params.storeId}/billboards/new`)}>
                <Plus className='mr-2 w-4 h-4'/>
                Add New
            </Button>
        </div>
        <Separator/>
    </>
  )
}

export default Client;
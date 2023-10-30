"use client";

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { OrderColumn, columns } from './columns';
import { Plus } from 'lucide-react';

import Heading from '@/components/ui/heading';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { DataTable } from '@/components/ui/data-table';
import { ApiList } from '@/components/ui/api-list';

interface ClientProps {
  data: OrderColumn[]
}

function Client({data}: ClientProps) {

    const router = useRouter();
    const params = useParams();

  return (
    <>
        <Heading title={`Orders (${data.length})`} description='Manege orders for your store'/>
        <Separator/>
        <DataTable 
          columns={columns}
          data={data}
          searchKey='products'
        />
    </>
  )
}

export default Client;
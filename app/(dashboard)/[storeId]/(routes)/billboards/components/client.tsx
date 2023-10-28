"use client";

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { BillboardColumn, columns } from './columns';
import { Plus } from 'lucide-react';

import Heading from '@/components/ui/heading';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { DataTable } from '@/components/ui/data-table';
import { ApiList } from '@/components/ui/api-list';

interface ClientProps {
  data: BillboardColumn[]
}

function Client({data}: ClientProps) {

    const router = useRouter();
    const params = useParams();

  return (
    <>
        <div className='flex items-center justify-between'>
            <Heading title={`Billboards (${data.length})`} description='Manege billboards for your store'/>
            <Button onClick={() => router.push(`/${params.storeId}/billboards/new`)}>
                <Plus className='mr-2 w-4 h-4'/>
                Add New
            </Button>
        </div>
        <Separator/>
        <DataTable 
          columns={columns}
          data={data}
          searchKey='label'
        />
        <Heading title='API' description='API calls for Billboards'/>
        <Separator/>
        <ApiList entityName='billboards' entityIdName='billboardId'/>
    </>
  )
}

export default Client;
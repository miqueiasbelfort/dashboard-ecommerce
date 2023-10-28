"use client";

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { CategoriesColumn, columns } from './columns';
import { Plus } from 'lucide-react';

import Heading from '@/components/ui/heading';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { DataTable } from '@/components/ui/data-table';
import { ApiList } from '@/components/ui/api-list';

interface ClientProps {
  data: CategoriesColumn[]
}

function Client({data}: ClientProps) {

    const router = useRouter();
    const params = useParams();

  return (
    <>
        <div className='flex items-center justify-between'>
            <Heading title={`Categories (${data.length})`} description='Manege categories for your store'/>
            <Button onClick={() => router.push(`/${params.storeId}/categories/new`)}>
                <Plus className='mr-2 w-4 h-4'/>
                Add New
            </Button>
        </div>
        <Separator/>
        <DataTable 
          columns={columns}
          data={data}
          searchKey='name'
        />
        <Heading title='API' description='API calls for Categories'/>
        <Separator/>
        <ApiList entityName='categories' entityIdName='categoryId'/>
    </>
  )
}

export default Client;
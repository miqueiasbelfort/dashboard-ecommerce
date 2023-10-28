import React from 'react';
import CategoriesClient from './components/client';
import prismadb from '@/lib/prismadb';

import { CategoriesColumn } from './components/columns';
import {format} from 'date-fns';

async function CategoriesPage({params}: {params: {storeId: string}}) {

  const categories = await prismadb.category.findMany({
    where: {
      storeId: params.storeId
    },
    include: {
      billboard: true
    },
    orderBy: {
      createdAt: 'desc'
    }
  });

  const formatedCategories: CategoriesColumn[] = categories.map(item => ({
    id: item.id,
    name: item.name,
    billboardLabel: item.billboard.label,
    createdAt: format(item.createdAt, "MMMM do, yyyy")
  }))

  return (
    <div className='flex-col'>
        <div className='flex-1 space-y-4 p-8 pt-6'>
            <CategoriesClient data={formatedCategories}/>
        </div>
    </div>
  )
}

export default CategoriesPage;
import prismadb from '@/lib/prismadb';
import React from 'react';
import BillbaordForm from './components/billboard-form';

async function BillboardPage({params}: {params: {billboardId: string}}) {

    const billboard = await prismadb.billboard.findUnique({
        where: {
            id: params.billboardId
        }
    })

  return (
    <div className='flex-col'>
        <div className='flex-1 space-y-4 p-8 pt-6'>
            <BillbaordForm 
                initialData={billboard}
            />
        </div>
    </div>
  )
}

export default BillboardPage;
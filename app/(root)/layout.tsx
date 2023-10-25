// "use client";
import React from 'react';

import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import prismadb from '@/lib/prismadb';

async function Layout({children}: {children: React.ReactNode}) {

    const { userId } = auth();

    if (!userId) {
        redirect('/sign-in');
    }

    const store = await prismadb.store.findFirst({
        where: {
            userId
        }
    });

    if(store){
        redirect(`/${store.id}`);
    }

  return (
    <>
        {children}
    </>
  )
}

export default Layout;
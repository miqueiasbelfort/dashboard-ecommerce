import { UserButton, auth } from '@clerk/nextjs';
import React from 'react';
import {MainNav} from './main-nav';
import StoreSwitcher from './store-switcher';
import { redirect } from 'next/navigation';
import prismadb from '@/lib/prismadb';

async function Navbar() {

    const {userId} = auth();
    if(!userId){
        redirect("/sign-in");
    }

    const stores = await prismadb.store.findMany({
        where: {
            userId
        }
    });

  return (
    <div className='border-b'>
        <div className='flex h-16 items-center px-4'>
            <div>
                <StoreSwitcher itens={stores}/>
            </div>
            <div className=''>
                <MainNav className='mx-6'/>
            </div>
            <div className='ml-auto flex items-center space-x-4'>
                <UserButton afterSignOutUrl='/'/>
            </div>
        </div>
    </div>
  )
}

export default Navbar;
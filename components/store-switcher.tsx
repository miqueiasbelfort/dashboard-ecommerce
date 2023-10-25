"use client";

import React, { useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Store } from '@prisma/client';
import { useStoreModal } from '@/hooks/use-store-modal';
import { useParams, useRouter } from 'next/navigation';
import { Button } from './ui/button';
import { CheckIcon, ChevronsUpDown, PlusCircle, Store as StoreIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from './ui/command';

type PopoverTriggerProps = React.ComponentPropsWithoutRef<typeof PopoverTrigger>
interface StoreSwitcherProps extends PopoverTriggerProps{
    itens: Store[];
}

function StoreSwitcher({className, itens = []}: StoreSwitcherProps) {

    const storeModel = useStoreModal();
    const params = useParams();
    const router = useRouter();

    const formattedItens = itens.map(item => ({
        label: item.name,
        value: item.id
    }));

    const currentStore = formattedItens.find(item => item.value === params.storeId);

    const [open, setOpen] = useState(false);

    const onStoreSelect = (store: {label: string, value: string}) => {
        setOpen(false);
        router.push(`/${store.value}`);
    }

  return (
    <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
            <Button variant="outline" size="sm" role='combobox' aria-expanded={open} aria-label='Select a store' className={cn("w-[200px] justify-between", className)}>
                <StoreIcon className='mr-2 h-4 w-4'/>
                {currentStore?.label}
                <ChevronsUpDown className='ml-auto w-4 h-4 shrink-0 opacity-50'/>
            </Button>
        </PopoverTrigger>
        <PopoverContent className='w-[200px] p-0'>
            <Command>
                <CommandList>
                    <CommandInput placeholder='Search store...'/>
                    <CommandEmpty>No store found</CommandEmpty>
                    <CommandGroup heading="Stores">
                        {formattedItens.map(store => (
                            <CommandItem 
                                key={store.value}
                                onSelect={() => onStoreSelect(store)}
                                className='text-sm'
                            >
                                <StoreIcon className='w-4 h-4 mr-2'/>
                                {store.label}
                                <CheckIcon className={cn("ml-auto h-4 w-4", currentStore?.value === store.value ? "opacity-100" : "opacity-0")}/>
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </CommandList>
                <CommandSeparator/>
                <CommandList>
                    <CommandGroup>
                        <CommandItem 
                            onSelect={() => {
                                setOpen(false);
                                storeModel.onOpen();
                            }}
                        >
                            <PlusCircle className='mr-2 h-5 w-5'/>
                            Create Store
                        </CommandItem>
                    </CommandGroup>
                </CommandList>
            </Command>
        </PopoverContent>
    </Popover>
  )
}

export default StoreSwitcher;
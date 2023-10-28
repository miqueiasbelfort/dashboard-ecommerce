"use client";

import { useOrigin } from "@/hooks/use-origin";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import ApiAlert from "./api-alert";

interface ApiListProps {
    entityName: string,
    entityIdName: string
}

export const ApiList: React.FC<ApiListProps> = ({entityIdName, entityName}) => {
    
    const params = useParams();
    const origin = useOrigin();

    const baseUrl = `${origin}/api/${params.storeId}`;
    
    return (
        <>
            <ApiAlert 
                title="GET" 
                variante="public"
                description={`${baseUrl}/${entityName}`}
            />
            <ApiAlert 
                title="GET" 
                variante="public"
                description={`${baseUrl}/${entityName}/{${entityIdName}}`}
            />
            <ApiAlert 
                title="POST" 
                variante="admin"
                description={`${baseUrl}/${entityName}`}
            />
            <ApiAlert 
                title="PATCH" 
                variante="admin"
                description={`${baseUrl}/${entityName}/{${entityIdName}}`}
            />
            <ApiAlert 
                title="DELETE" 
                variante="admin"
                description={`${baseUrl}/${entityName}/{${entityIdName}}`}
            />
        </>
    );
};
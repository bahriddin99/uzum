// --------- Authorization  -------------

import { ReactNode } from "react";




//-------------------------------------





export interface PostItem{
    id:number;
    title:string;
    body:string;
    userId:number;
}

export interface CardPropType{
    data:PostItem;
    key:number|string
}


export interface gridPropType{
    children:propType | ReactNode;
    cols:string|number,
    gap:string|number
}



// ------------------------------------



// ------------- React Tsx , JSX Elmenets -------------

export interface propType{
    children: string | any | null
}

export interface sectionPropType{
    children: string | any | null;
    title?: string;
    id?:string | number
}
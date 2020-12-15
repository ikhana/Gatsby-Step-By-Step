import React, { ReactNode } from 'react'
import Header from './Header'

type LayoutProps ={
    children: ReactNode
    Headertitle: string
}



export default function  Layout  ({children,Headertitle}: LayoutProps){
    return (
        <div>
            <Header title={Headertitle}/>
            <div>
                {children}
            </div>
        </div>
    )
}

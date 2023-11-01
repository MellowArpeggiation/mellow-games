import React, { Component } from 'react'
import Header from '@/components/header'

const Link = ({
    href,
    className,
    children,
}: {
    href: string,
    className?: string,
    children: React.ReactNode,
}) =>
    <li className={`text-xl font-light text-smallcaps mx-5 ${className}`}><a className='animate-underline' href={href}>{children}</a></li>

const Nav = ({
    simple,
}: {
    simple?: boolean,
}) =>
    <div className={`flex z-100 fixed w-full bg-black bg-opacity-25 p-4 ${simple ? "" : "border-b border-b-white border-opacity-50"}`}>
        {!simple && 
            <div className="w-56">
                <a href="/"><Header title="MELLOW" /></a>
                {/* <span className='font-title text-4xl'><a className='animate-underline' href='/'>MELLOW</a></span> */}
            </div>
        }
        
        <div className='my-auto flex-1'>
            <ul className='flex flex-1 align-center justify-center'>
                <Link href="/fung">FUNG</Link>
                <Link href="/drift-king">Drift King</Link>
                <Link href="/ok-boomer">OK BOOMER</Link>
                <Link href="/good-boy">Good Boy</Link>
            </ul>
        </div>

        {!simple && 
            <div className='w-56 my-auto'>
                <p className='text-neutral-500 text-right'>© MELLOW PTY LTD</p>
            </div>
        }
    </div>

export default Nav

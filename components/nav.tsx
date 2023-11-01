import React, { Component } from 'react';

const Link = ({
    href,
    className,
    children,
}: {
    href: string,
    className?: string,
    children: React.ReactNode,
}) =>
    <li className={'text-xl mx-5 ' + className}><a className='animate-underline' href={href}>{children}</a></li>

const Nav = ({
    simple,
}: {
    simple?: boolean,
}) =>
    <div className="flex z-100 fixed w-full bg-black bg-opacity-50 p-4">
        {!simple && 
            <div className="w-48">
                <span className='font-title text-4xl'><a className='animate-underline' href='/'>MELLOW</a></span>
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
            <div className='w-48 my-auto'>
                <p className='text-slate-600 text-right'>©️ MELLOW PTY LTD</p>
            </div>
        }
    </div>

export default Nav

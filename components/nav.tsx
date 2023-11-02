'use client'
import React, { Component, useEffect, useState } from 'react'
import Header from '@/components/header'
import { Divide as Hamburger } from 'hamburger-react'

const Link = ({
    href,
    className,
    children,
}: {
    href: string,
    className?: string,
    children: React.ReactNode,
}) =>
    <li className={`text-2xl lg:text-xl xl:text-2xl font-light text-smallcaps mx-5 ${className}`}><a className='animate-underline' href={href}>{children}</a></li>

const Links = () =>
    <ul className='flex flex-col lg:flex-row text-center flex-1 align-center justify-center'>
        <Link href="/fung">FUNG</Link>
        <Link href="/drift-king">Drift King</Link>
        <Link href="/ok-boomer">OK BOOMER</Link>
        <Link href="/good-boy">Good Boy</Link>
    </ul>

const Nav = ({
    simple,
}: {
    simple?: boolean,
}) => {
    const scrollTrigger = 64

    const [isOpen, setOpen] = useState(false)
    const [isScrolled, setScroll] = useState(typeof(window) !== 'undefined' ? window.scrollY > scrollTrigger : false)

    useEffect(() => {
        document.addEventListener('scroll', () => {
            setScroll(window.scrollY > scrollTrigger)
        })
    })

    return <div className={`flex justify-between transition-colors ${isOpen || isScrolled ? "bg-opacity-75" : ""} z-100 fixed w-full bg-black bg-opacity-25 p-4 ${simple ? "" : "border-b border-b-white border-opacity-50"}`}>
        {!simple &&
            <div className="my-auto">
                <a href="/"><Header title="MELLOW" /></a>
            </div>
        }
        
        <div className='my-auto flex-1 lg:hidden'>
            {(isOpen || simple) && <Links />}
        </div>
        
        <div className='my-auto flex-1 hidden lg:block'>
            <Links />
        </div>

        {!simple &&
            <div className='w-56 my-auto hidden lg:block'>
                <p className='text-neutral-500 text-right'>© MELLOW PTY LTD</p>
            </div>
        }

        {!simple &&
            <div className='my-auto lg:hidden'>
                <Hamburger toggled={isOpen} toggle={setOpen} />
            </div>
        }
    </div>
}

export default Nav

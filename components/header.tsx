import React, { Component } from 'react';
import './header.css'

const Header = ({
    title,
    className,
}: {
    title: string,
    className?: string,
}) =>
    <div className={`intro-header font-title ${className}`}>
        <h1 className="hidden md:block">
            {title}
            <span>{title}</span>
        </h1>
        <h1 className="md:hidden">
            {title[0]}
            <span>{title[0]}</span>
        </h1>
    </div>

export default Header

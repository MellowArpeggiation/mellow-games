import React, { Component } from 'react';

type HeaderProps = {
    title: string,
}

const Header = ({ title }: HeaderProps) =>
    <div className="intro-header">
        <h1 className="font-title hidden md:block">
            {title}
            <span>{title}</span>
        </h1>
        <h1 className="font-title md:hidden">
            {title[0]}
            <span>{title[0]}</span>
        </h1>
    </div>

export default Header

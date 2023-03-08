import React from 'react'
import './index.scss'

type Props = {}

export default function Loading({ }: Props) {
    return (
        <div className="container">
            <div className="ring"></div>
            <div className="ring"></div>
            <div className="ring"></div>
        </div>
    )
}
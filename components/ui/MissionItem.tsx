import Image from 'next/image';
import React from 'react'

interface MissionItemProps {
    title: string;
    description: string;
    bgColor: string;
}

export default function MissionItem({ title, description, bgColor }: MissionItemProps) {
    return (
        <div className={`text-center p-16 bg-opacity-75 ${bgColor}`}>
            <h4 className="m-5 text-[22px] font-bold text-white uppercase">{title}</h4>
            <p className="text-white">{description}</p>
        </div>
    )
}

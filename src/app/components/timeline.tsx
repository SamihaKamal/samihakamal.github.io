
import { prisma } from '@/db';
import { useState } from 'react';
import { Bullet } from './bullet';
import TimelineWord from '../wordComponents/timelineWord';

export async function Timeline(){

    const experience = await prisma.experience.findMany({
        include:{
            skills: true
        }
    });


    return (
        <div>
            <div className="absolute flex justify-end">
                <TimelineWord name="Timeline" colour="#723d46"/>
            </div>
            <div className="absolute bottom left-0 right-0 flex justify-between items-center px-4">
                <div className="relative w-full bg-gray-300 h-1">
                {/* Timeline line */}
                <div className="absolute inset-0 bg-slate-400 h-1"></div>
                
                {/* Timeline markers */}
                <div className="absolute inset-0 flex items-center justify-between">
                    <div className='w-4 h-4 bg-slate-100'></div>
                    {experience.map(a =>(
                        <Bullet key={a.id} {...a}/>
                    ))}
                    <div className='w-4 h-4 bg-slate-100'></div>
                </div>
                </div>
            </div>
            
            
        </div>
    )
}
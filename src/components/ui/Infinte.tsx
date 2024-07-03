import React from 'react'

type Props = {}

export default function Infinte({ }: Props) {
    return (
        <div className='mt- -ml-[90vh]'>
            {/*@ts-ignore*/}
            <div className='start' style={{ '--x': '300px', '--y': '100px' }}></div>
        </div>)
}
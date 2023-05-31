import React, { useState } from 'react'
import Expand from './../../assets/expand.svg'
import Close from './../../assets/close.svg'
import People from './../../assets/people.svg'
import TableIcon from './../../assets/table-icon.svg'
import Play from './../../assets/play.svg'
import Ratting from './../../assets/ratting.svg'

import { iLiveScores, iTableHeader } from '../../models/payload.model'



interface Props {
    header?: iTableHeader
    content?: iLiveScores[]
}

const Arrcordion: React.FC<Props> = (props: Props) => {

    const [active, setActive] = useState(true)
    const { header, content } = props

    const timeConvert = (time: number): string => {
        if (!time) return ''
        const date = new Date(time * 1000)

        const hours = date.toString().split(' ')[4].split(':')[0]
        const minutes = date.toString().split(' ')[4].split(':')[1]
        return `${hours}:${minutes}`
    }

    return (
        <div>
            <button className="w-full">
                <div className="flex bg-gray-200 w-full cursor-pointer border border-gray-100 items-center hover:bg-gray-300 text-xs p-1 lg:text-sm lg:p-2">
                    <div className="w-[10%]" onClick={() => setActive(prev => !prev)}>
                        <img src={active ? Expand : Close} alt="" />
                    </div>
                    <div className='flex gap-1 items-center justify-start w-[80%] md:w-[57%]'>
                        <img width={24} height={24} src={header?.countryLogo ? header.countryLogo : ''} />
                        <p className="text-gray-500 text-xs lg:text-md">{header?.country ? header.country : ''}</p>
                        <p className=" text-gray-950 font-bold  text-xs lg:text-md ">{header?.name ? header.name : ''}</p>
                    </div>
                    <div className="items-center justify-center hidden md:flex md:w-[7%]">1</div>
                    <div className="items-center justify-center hidden md:flex md:w-[7%]">x</div>
                    <div className="items-center justify-center hidden md:flex md:w-[7%]">2</div>
                    <div className='items-center justify-center gap-1 w-[10%] flex md:w-[7%]'>
                        <img src={People} alt="People Live Count" />
                        <span>{header?.liveCount ? header.liveCount : 0}</span>
                    </div>
                </div>
            </button>
            <div className={`${active ? '' : 'hidden'}`}>
                {content?.length ? content.map((item, i: number) => (
                    <div key={i} className='bg-white flex w-full text-xs border border-t-0 items-center hover:bg-slate-50 p-1 lg:p-2 '>
                        <div className="w-[10%] md:w-[6%]">{timeConvert(item.matchTime)}</div>
                        <div className="hidden text-red-600 md:inline-block md:w-[5%]">
                            {item.minute <= 45 && 'Hiệp 1'}
                            {item.minute > 45 && item.minute < 90 && 'Hiệp 2'}
                            {item.minute > 90 && 'Bù Giờ'}
                        </div>
                        <div className="w-[5%] md:w-[4%]"><div className="text-red-600 font-bold">
                            <span className="whitespace-nowrap">{item.minute >= 90 ? `${item.minute}'` : '90+'}</span>
                            <span className="animate-pulse ml-[2px]"></span>
                        </div>

                        </div>
                        <div className='w-[71%] md:w-[36%] flex justify-center items-center'>
                            <p className="w-[35%] text-right p-1 rounded false">{item.homeName}</p>
                            <div className='w-[30%] flex justify-center items-center gap-2'>
                                <div className='w-8 h-8 rounded-full flex justify-center items-center md:bg-gray-200'>
                                    <img src={item.homeLogo} />
                                </div>
                                <a target="_blank" className="" href="/detail-match/262259329">
                                    <div className=" flex gap-1">
                                        <p className="font-bold text-red-600">{item.homeScore}</p>
                                        <p className="font-bold text-red-600">-</p>
                                        <p className="font-bold text-red-600">{item.awayScore}</p>
                                    </div>
                                </a>
                                <div className='w-8 h-8 rounded-full flex justify-center items-center md:bg-gray-200'>
                                    <img src={item.awayLogo} />
                                </div>
                            </div>
                            <p className="w-[35%] text-left p-1 rounded flex false">{item.awayName}</p>
                        </div>
                        <div className="hidden gap-2 justify-center items-center md:w-[8%] md:flex">
                            <p>HT</p>
                            <p className="font-bold">{item.homeHalfScore}</p>
                            <p>-</p>
                            <p className="font-bold">{item.awayHalfScore}</p>
                        </div>
                        <div className="hidden gap-2 justify-center items-center md:w-[8%] md:flex">
                            <img src={TableIcon} />
                            <p className="font-bold">{item.homeCorner}</p>
                            <p>-</p>
                            <p className="font-bold">{item.awayCorner}</p>
                        </div>
                        <div className="hidden justify-center text-center md:w-[7%] md:flex">-</div>
                        <div className="hidden text-center md:w-[7%] md:flex md:items-center md:justify-center">-</div>
                        <div className="hidden text-center md:w-[7%] md:flex md:items-center md:justify-center">-</div>
                        <div className='w-[8%] icon flex justify-center md:w-[7%]'>
                            <button className='rounded-full hover:shadow-red-500 hover:shadow-sm transition-shadow'>
                                <img src={Play} />
                            </button>
                        </div>
                        <div className='w-[8%] icon flex justify-center md:w-[5%]'>
                            <div className='cursor-pointer'>
                                <img src={Ratting} />
                            </div>
                        </div>
                    </div>)
                ) : <></>}

            </div>
        </div>
    )
}

export default Arrcordion
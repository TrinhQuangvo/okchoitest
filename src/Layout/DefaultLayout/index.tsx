import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Settings from './../../assets/settings.svg'
import Expand from './../../assets/expand.svg'

type Props = {
    children: JSX.Element[] | JSX.Element
}

export const DefaultLayout: React.FC<Props> = (props: Props) => {

    const { children } = props

    const LEAGUES = [
        { name: 'English Premier League', color: 'rgb(247, 80, 0)' },
        { name: 'UEFA Champions League', color: 'rgb(247, 80, 0)' },
        { name: 'UEFA Europa League', color: 'rgb(111, 0, 221)' },
        { name: 'UEFA Europa Conference League', color: 'rgb(208, 120, 216)' },
        { name: 'Spanish La Liga', color: 'rgb(0, 102, 51)' },
        { name: 'Italian Serie A', color: 'rgb(0, 136, 255)' },
        { name: 'German Bundesliga Cup', color: 'rgb(128, 0, 128)' },
        { name: 'Southeast Asian Games', color: 'rgb(181, 181, 0)' },
    ]

    const scrollOnTop = () => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })


    return (
        <>
            <Header />
            <div className='flex flex-col-reverse justify-end w-full bg-gray-100 min-h-screen p-2 gap-3 lg:gap-6 lg:px-16 lg:py-4 lg:flex-row '>
                <aside className='w-full lg:w-1/5 '>
                    <div className="w-full flex flex-col gap-3 lg:sticky lg:top-0 lg:gap-6">
                        <div className="bg-white rounded p-2 md:p-4 md:rounded-xl ">
                            <p className="text-md font-bold text-[#162029] md:text-xl ">Giải đấu hấp dẫn</p>
                            <div className='mt-3 md:mt-5'>
                                <ul>
                                    {LEAGUES.map((item, i: number) => <li key={i}>
                                        <a className="flex items-center my-4 cursor-pointer transition-all hover:translate-x-1 " href="/league/13924">
                                            <p className="text-sm md:text-md ml-2" style={{ color: item.color }}>{item.name}</p>
                                        </a>
                                    </li>)}
                                </ul>
                            </div>
                        </div>
                    </div>
                </aside >
                <main className='w-full'>
                    <div className='bg-white  rounded lg:p-4  p-2 lg:rounded-lg'>
                        <div className='flex items-center justify-between'>
                            <h1 className="font-bold text-xl lg:text-2xl ">Danh sách trận cầu</h1>
                            <button className="bg-[#E5E9FF] p-1 rounded transition-shadow hover:shadow-md lg:h-10 lg:p-2 lg:rounded-lg">
                                <img src={Settings} alt="" />
                            </button>
                        </div>
                        {children}
                    </div>
                </main>
            </div >
            <button onClick={scrollOnTop} className='fixed bottom-10 right-5 w-9 h-9 bg-white rounded-full border border-[#2C3882]'>
                <div className='flex justify-center hover:-translate-y-1 transition-all'>
                    <img src={Expand} />
                </div>
            </button>
            <Footer />
        </>
    )
}

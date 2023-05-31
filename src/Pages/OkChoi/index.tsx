import React, { useEffect, useState } from 'react'
import { DefaultLayout } from '../../Layout'
import All from './All'
import Incomming from './Incomming'
import Live from './Live'
import Finished from './Finished'
import Mine from './Mine'
import Hot from './Hot'

export const OkChoiTest: React.FC = () => {
    const [currentTab, setCurrentTab] = useState<string>('trực tiếp')


    useEffect(() => {

    }, [])

    const TABS: string[] = ['tất cả', 'hot', 'sắp diễn ra', 'trực tiếp', 'đã kết thúc', 'của tôi']

    const renderTabs = () => {
        return <ul className='flex gap-4 lg:gap-10 overflow-x-scroll h-10 pt-3 md:overflow-hidden'>
            {TABS.map((tab, i: number) => <li className={`cursor-pointer whitespace-nowrap`} key={i} onClick={() => setCurrentTab(tab)}>
                <div className={`capitalize ${tab === currentTab ? 'inline-block font-bold text-[#2C3882] border-b-2 border-[#2C3882] rounded-t-lg active' : 'inline-block  border-b-2 border-transparent rounded-t-lg '} `}>
                    {tab}
                    {tab === 'trực tiếp' && tab === currentTab && <span className="inline-flex items-center justify-center w-5 h-5 ml-2 text-xs font-extralight text-white bg-red-600 rounded-full animate-bounce">85</span>}
                </div>

            </li>)}
        </ul>
    }
    return (
        <DefaultLayout>
            {renderTabs()}
            <div className='mt-4 lg:mt-6'>
                <>{currentTab === 'tất cả' && <All />} </>
                <>{currentTab === 'hot' && <Hot />} </>
                <>{currentTab === 'sắp diễn ra' && <Incomming />} </>
                <>{currentTab === 'trực tiếp' && <Live />} </>
                <>{currentTab === 'đã kết thúc' && <Finished />} </>
                <>{currentTab === 'của tôi' && <Mine />} </>
            </div>

        </DefaultLayout>
    )
}

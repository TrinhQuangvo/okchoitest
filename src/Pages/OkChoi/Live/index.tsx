import React, { useEffect, useState } from 'react'
import { APIs } from '../../../APIs/okchoi.api';
import { iLiveScores, iTableHeader } from '../../../models/payload.model';
import Arrcordion from '../../../Components/Accordion';
import Loading from '../../../Components/Loading';

const Live: React.FC = () => {
    const [allData, setAllData] = useState<any>([])

    const fetchData = async () => {
        try {
            const res = await APIs.getLiveData({ islive: true });
            const data = res.data.value.datas
            if (data)
                setAllData(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            {!allData ? <div className='py-6 flex justify-center'><Loading /></div> : allData.map((item: any, i: number) => {
                const header: iTableHeader = {
                    country: item.country,
                    countryLogo: item.countryLogo,
                    liveCount: item.liveCount,
                    name: item.name
                }
                const content = !item.liveScores ? [] : item.liveScores.map((data: iLiveScores) => {
                    return {
                        homeLogo: data.homeLogo,
                        homeName: data.homeName,
                        homeScore: data.homeScore,
                        homeHalfScore: data.homeHalfScore,
                        homeCorner: data.homeCorner,
                        awayLogo: data.awayLogo,
                        awayName: data.awayName,
                        awayScore: data.awayScore,
                        awayHalfScore: data.awayHalfScore,
                        awayCorner: data.awayCorner,
                        matchTime: data.matchTime,
                        minute: data.minute
                    }
                })
                return <div key={i}>
                    <Arrcordion header={header} content={content} />
                </div>
            })
            }
        </>
    )
}

export default Live
import React, { useEffect, useState } from 'react'
import { APIs } from '../../../APIs/okchoi.api'

const Mine: React.FC = () => {
    const [setAllData] = useState<any>([])

    const fetchData = async () => {
        try {
            const res = await APIs.getAllData();
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
            <div className="mt-4 lg:mt-6">Không có dữ liệu</div>
        </>
    )
}

export default Mine
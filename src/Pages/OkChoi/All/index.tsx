import React, { useEffect } from 'react'
import axios from 'axios'

type Props = {}

const All: React.FC<Props> = () => {

    const payload = {}

    const fetchData = async () => {
        try {
            const response = await axios.post('https://api.okchoi.com/api/leaguelive/', payload);
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <div>All</div>
    )
}

export default All
import React, { useEffect } from 'react'
import axios from 'axios'

const Hot: React.FC = () => {
    const fetchData = async () => {
        try {
            const response = await axios.post('https://api.okchoi.com/api/leaguelive', { ishot: true });
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div>Hot Page</div>
    )
}

export default Hot
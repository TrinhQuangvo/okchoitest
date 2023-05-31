import axios from "axios"
import { hot, islive, issend, schedule } from "../models/payload.model"

const URL = 'https://api.okchoi.com/api/leaguelive'


export const APIs = {
    getAllData() {
        return axios.post(URL, {})
    },
    getHotData(payload: hot) {
        return axios.post(URL, payload)
    },
    getScheduleData(payload: schedule) {
        return axios.post(URL, payload)
    },
    getFinishedData(payload: issend) {
        return axios.post(URL, payload)
    },
    getLiveData(payload: islive) {
        return axios.post(URL, payload)
    }
}
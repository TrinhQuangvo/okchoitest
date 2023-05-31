export interface hot {
    ishot: boolean
}
export interface live {
    islive: boolean
}
export interface schedule {
    isschedule: boolean
}
export interface issend {
    issend: boolean
}

export interface islive {
    islive: boolean
}

export interface iTableHeader {
    country: string
    countryLogo: string
    name: string
    liveCount: number
}

export interface iLiveScores {
    homeLogo: string
    homeName: string
    homeScore: number
    homeCorner: number
    homeHalfScore: number
    awayName: string
    awayLogo: string
    awayScore: number
    awayCorner: number
    awayHalfScore: number
    matchTime: number
    minute: number
}
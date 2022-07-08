export interface PlaceCovers {
    country: string
    places: {
        title: string
        key: string
        coverImage: string
        overlayImage: string
    }[]
}
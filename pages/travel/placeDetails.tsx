interface PlaceDetails {
    title: string
    key: string
    places: {
        name: string
        images: {
            url: string
            caption: string
        }[]
    }[]
}

export default PlaceDetails
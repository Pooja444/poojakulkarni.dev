import { Box, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { getViewport } from "../../util/util"
import NavBar from "../navbar"
import PlaceHeader from "./PlaceHeader"
import { PlaceDetails } from "./placeDetails"
import Image from 'next/image'

import placeDetailsJson from './placesDetails.json'

function Place(props: { place: PlaceDetails }) {

    const [widthFactor, setWidthFactor] = useState(1.8)
    const [imageDimensions, setImageDimensions] = useState(0)
    const [imageGap, setImageGap] = useState(0)
    const [viewport, setViewport] = useState(5)
    const [titleFontSize, setTitleFontSize] = useState(0)
    const [imageBorderWidth, setImageBorderWidth] = useState(0)

    useEffect(() => {
        (async () => {
            const viewport = await getViewport()
            setViewport(viewport)
        })()
    }, [])

    useEffect(() => {
        switch (viewport) {
            case 1:
                setWidthFactor(5.8)
                setImageDimensions(120)
                setImageGap(5)
                setTitleFontSize(1.2)
                setImageBorderWidth(0.02)
                break
            case 2:
                setWidthFactor(4.8)
                setImageDimensions(170)
                setImageGap(8)
                setTitleFontSize(1.3)
                setImageBorderWidth(0.02)
                break
            case 3:
                setWidthFactor(3.8)
                setImageDimensions(210)
                setImageGap(10)
                setTitleFontSize(1.3)
                setImageBorderWidth(0.03)
                break
            case 4:
                setWidthFactor(2.8)
                setImageDimensions(240)
                setImageGap(12)
                setTitleFontSize(1.4)
                setImageBorderWidth(0.04)
                break
            case 5:
            default:
                setWidthFactor(1.8)
                setImageDimensions(260)
                setImageGap(14)
                setTitleFontSize(1.4)
                setImageBorderWidth(0.05)
        }
    }, [viewport])

    return (
        <Box>
            <NavBar></NavBar>
            <Box sx={{
                pt: "90px",
                pb: "20px",
                color: "white",
                display: "flex",
                justifyContent: "center",
                backgroundColor: "#217070",
                boxShadow: "#ffffff 0px -50px 36px -28px inset",
            }}>
                <Typography fontSize="1.6rem">
                    {props.place.title}
                </Typography>
            </Box>
            <Box>
                {
                    props.place.places.map(place => (
                        <Box>
                            <PlaceHeader
                                placeName={place.name}
                                midFlex={(place.name.length * widthFactor) / 19}
                                key={place.name}
                                titleFontSize={titleFontSize}
                            ></PlaceHeader>
                            <Box sx={{ display: "flex", flexFlow: "row wrap", justifyContent: "center", }}>
                                {
                                    place.images.map(image => (
                                        <Box sx={{
                                            margin: imageGap + "px",
                                            // borderRadius: "8px",
                                            overflow: "hidden",
                                            // border: imageBorderWidth + "rem solid #427F8F",
                                            backgroundColor: "#DDF3FF"
                                        }}>
                                            <Image
                                                src={image.url}
                                                alt={image.url}
                                                width={imageDimensions + "px"}
                                                height={imageDimensions + "px"}
                                                objectFit="contain"
                                                key={image.url}
                                            ></Image>
                                        </Box>
                                    ))
                                }
                            </Box>
                        </Box>
                    ))
                }

            </Box>
        </Box>
    )
}

export async function getStaticPaths() {
    const placeDetails: PlaceDetails[] = placeDetailsJson
    const paths = placeDetails.map(placeDetail => ({
        params: { place: placeDetail.key }
    }))

    return { paths, fallback: false }
}

export async function getStaticProps(arg: { params: { place: string } }) {
    const placeDetails: PlaceDetails[] = placeDetailsJson
    const place: PlaceDetails = placeDetails.filter(place => place.key === arg.params.place)[0]

    return { props: { place } }
}

export default Place
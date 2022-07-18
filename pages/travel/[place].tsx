import { Box, Modal, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { getViewport } from "../../util/util"
import NavBar from "../navbar"
import PlaceHeader from "./PlaceHeader"
import { PlaceDetails } from "./placeDetails"
import Image from 'next/image'

import placeDetailsJson from './placesDetails.json'
import Carousel from "react-material-ui-carousel"

function Place(props: { place: PlaceDetails }) {

    type Image = { "url": string, "caption": string }

    const images: Image[] = props.place.places.flatMap(place => place.images)
    let indicesMap: Map<string, number> = new Map<string, number>()
    images.map((image, index) => indicesMap.set(image.url, index))

    const [widthFactor, setWidthFactor] = useState<number>(1.8)
    const [imageDimensions, setImageDimensions] = useState<number>(0)
    const [imageGap, setImageGap] = useState<number>(0)
    const [viewport, setViewport] = useState<number>(5)
    const [titleFontSize, setTitleFontSize] = useState<number>(0)
    const [modalOpen, setModalOpen] = useState<boolean>(false)
    const [imageNumber, setImageNumber] = useState<number>(0)
    const [modalWidth, setModalWidth] = useState<number>(0)
    const [modalHeight, setModalHeight] = useState<number>(0)

    useEffect(() => {
        (async () => {
            setViewport(await getViewport())
            const viewWidth = window.outerWidth
            const viewHeight = window.outerHeight
            if (viewWidth > viewHeight) {
                setModalWidth(0.6 * viewWidth)
                setModalHeight(0.7 * viewHeight)
            } else {
                setModalWidth(0.85 * viewWidth)
                setModalHeight(0.5 * viewHeight)
            }
        })()
    }, [])

    useEffect(() => {
        switch (viewport) {
            case 1:
                setWidthFactor(5.8)
                setImageDimensions(120)
                setImageGap(5)
                setTitleFontSize(1.2)
                break
            case 2:
                setWidthFactor(4.8)
                setImageDimensions(170)
                setImageGap(8)
                setTitleFontSize(1.3)
                break
            case 3:
                setWidthFactor(3.8)
                setImageDimensions(210)
                setImageGap(10)
                setTitleFontSize(1.3)
                break
            case 4:
                setWidthFactor(2.8)
                setImageDimensions(240)
                setImageGap(12)
                setTitleFontSize(1.4)
                break
            case 5:
            default:
                setWidthFactor(1.8)
                setImageDimensions(260)
                setImageGap(14)
                setTitleFontSize(1.4)
        }
    }, [viewport])

    const handleOpen = (image: Image) => {
        setModalOpen(true)
        setImageNumber(image.url != undefined ? indicesMap.get(image.url) ?? 0 : 0)
    }

    const handleClose = () => setModalOpen(false)

    return (
        <Box>
            <NavBar/>
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
                        <Box key={place.name}>
                            <PlaceHeader
                                placeName={place.name}
                                midFlex={(place.name.length * widthFactor) / 19}
                                titleFontSize={titleFontSize}
                            />
                            <Box sx={{
                                display: "flex",
                                flexFlow: "row wrap",
                                justifyContent: "center"
                            }}
                            >
                                {
                                    place.images.map(image => (
                                        <Box sx={{
                                            margin: imageGap + "px",
                                            overflow: "hidden",
                                            backgroundColor: "#DDF3FF",
                                            cursor: "pointer"
                                        }}
                                            onClick={() => handleOpen(image)}
                                            key={image.url}
                                        >
                                            <Image
                                                src={image.url}
                                                alt={image.url}
                                                width={imageDimensions + "px"}
                                                height={imageDimensions + "px"}
                                                objectFit="contain"
                                                priority={true}
                                            ></Image>
                                        </Box>
                                    ))
                                }
                            </Box>
                        </Box>
                    ))
                }

            </Box>
            <Modal
                open={modalOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                disableAutoFocus={true}
            >
                <Box sx={{
                    position: "relative",
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: modalWidth + "px",
                    height: modalHeight + "px",
                    bgcolor: 'white',
                    boxShadow: 24,
                }}
                >
                    <Carousel
                        index={imageNumber}
                        autoPlay={false}
                        navButtonsAlwaysVisible={true}
                        indicators={false}
                        animation="fade"
                        duration={550}
                        key="images-carousel"
                    >
                        {
                            images.map(image => (
                                <Box sx={{
                                    position: "relative",
                                    width: modalWidth + "px",
                                    height: modalHeight + "px",
                                }}
                                    key={image.url + "-carousel"}
                                >
                                    <Image
                                        src={image.url}
                                        alt={image.url}
                                        layout="fill"
                                        objectFit="contain"
                                        priority={true}
                                    ></Image>
                                </Box>
                            ))
                        }
                    </Carousel>
                </Box>
            </Modal >
        </Box >
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
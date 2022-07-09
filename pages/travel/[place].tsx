import { Box, Modal, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { getViewport } from "../../util/util"
import NavBar from "../navbar"
import PlaceHeader from "./PlaceHeader"
import { PlaceDetails } from "./placeDetails"
import Image from 'next/image'

import placeDetailsJson from './placesDetails.json'

function Place(props: { place: PlaceDetails }) {

    type Image = Pick<PlaceDetails["places"][0]["images"][0], "caption" | "url">

    const [widthFactor, setWidthFactor] = useState<number>(1.8)
    const [imageDimensions, setImageDimensions] = useState<number>(0)
    const [imageGap, setImageGap] = useState<number>(0)
    const [viewport, setViewport] = useState<number>(5)
    const [titleFontSize, setTitleFontSize] = useState<number>(0)
    const [modalOpen, setModalOpen] = useState<boolean>(false)
    const [modalImage, setModalImage] = useState<Image>()

    const handleOpen = (image: Image) => {
        setModalOpen(true)
        setModalImage(image)
    }
    const handleClose = () => setModalOpen(false)

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
                                            overflow: "hidden",
                                            backgroundColor: "#DDF3FF",
                                            cursor: "pointer"
                                        }}
                                            onClick={() => handleOpen(image)}>
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
            <Modal
                open={modalOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                disableAutoFocus={true}
            >
                <Box sx={{
                    position: 'absolute' as 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: "65vw",
                    height: "85vh",
                    bgcolor: 'white',
                    boxShadow: 24,
                    p: 4,
                }}>
                    <Image
                        src={modalImage != undefined ? modalImage.url : ""}
                        alt={modalImage != undefined ? modalImage.url : ""}
                        layout="fill"
                        objectFit="contain"
                        key={modalImage != undefined ? modalImage.url : ""}
                    ></Image>
                </Box>
            </Modal>
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
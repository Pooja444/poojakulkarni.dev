import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { getViewport } from '../../util/util'
import NavBar from '../navbar'
import PlaceCovers from '../../types/placeCovers'
import placeCoversJson from './placeCovers.json'

function Travel() {

  const [placeCovers] = useState<PlaceCovers[]>(placeCoversJson as PlaceCovers[])
  const [viewport, setViewport] = useState(5)
  const [frameWidth, setFrameWidth] = useState(0)

  useEffect(() => {
    (async () => {
      const viewport = await getViewport()
      setViewport(viewport)
    })()
  }, [])

  useEffect(() => {
    switch (viewport) {
      case 1:
        setFrameWidth(window.innerWidth)
        break
      case 2:
        setFrameWidth(window.innerWidth / 2)
        break
      case 3:
        setFrameWidth(window.innerWidth / 2)
        break
      case 4:
        setFrameWidth(window.innerWidth / 3)
        break
      case 5:
      default:
        setFrameWidth(window.innerWidth / 3)
    }
  }, [viewport])

  return (
    <Box>
      <NavBar></NavBar>
      <Box sx={{
        pt: "90px",
        pb: "20px",
        backgroundColor: "#217070",
        textAlign: "center",
        boxShadow: "#ffffff 0px -50px 36px -28px inset",
      }}>
        <Typography fontSize="1.5rem" color="white">
          Explore the world through my travel gallery!
        </Typography>
      </Box>
      <Box>
        {
          placeCovers.map(travelImage => (
            <Box sx={{
              mt: "15px",
              textAlign: "center"
            }} key={travelImage.country + "-box"}>
              <Typography fontSize="1.3rem" key={travelImage.country}>
                {travelImage.country}
              </Typography>
              <Box sx={{
                mt: "15px",
                display: "flex",
                flexFlow: "row wrap",
                justifyContent: "center"
              }}>
                {
                  travelImage.places.map(place => (
                    <Box key={place.title} sx={{
                      cursor: "pointer",
                      position: "relative",
                      ":hover .overlay": {
                        height: "100%"
                      }
                    }}>
                      <Link
                        href="/travel/[place]"
                        as={`/travel/${place.key}`}
                        passHref
                        legacyBehavior>
                        <Image src={place.coverImage} alt={place.title} width={frameWidth} height={frameWidth - 100}></Image>
                      </Link>
                      <Box sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        overflow: "hidden",
                        width: "100%",
                        height: "0",
                        transition: ".35s ease"
                      }} className='overlay'>
                        <Box sx={{
                          color: "white",
                          fontSize: "20px",
                          position: "absolute"
                        }}>
                          <Link
                            href="/travel/[place]"
                            as={`/travel/${place.key}`}
                            passHref
                            legacyBehavior>
                            <Image src={place.overlayImage} alt={place.title} width={frameWidth} height={frameWidth - 100}></Image>
                          </Link>
                        </Box>
                      </Box>
                    </Box>
                  ))
                }
              </Box>
            </Box>
          ))
        }
      </Box>
    </Box>
  );
}

export default Travel
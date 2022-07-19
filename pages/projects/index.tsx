import { Box } from '@mui/material'
import { useEffect, useState } from 'react'
import NavBar from '../navbar'
import ProjectTypeHeader from './ProjectTypeHeader'
import projectsJson from './projects.json'
import Project from '../../types/Project'
import ProjectCard from './ProjectCard'
import { getViewport } from '../../util/util'

function Projects() {

  const [projects] = useState<Project[]>(projectsJson as Project[])
  const [projectsMap, setProjectsMap] = useState<Map<string, Project[]>>(new Map<string, Project[]>())
  const [headingWidthFactor, setHeadingWidthFactor] = useState(1.8)
  const [viewport, setViewport] = useState(5)

  useEffect(() => {
    (async () => {
      const viewport = await getViewport()
      setViewport(viewport)
    })()
  }, [])

  useEffect(() => {
    switch (viewport) {
      case 1:
        setHeadingWidthFactor(4.8)
        break
      case 2:
        setHeadingWidthFactor(4.8)
        break
      case 3:
        setHeadingWidthFactor(3.8)
        break
      case 4:
        setHeadingWidthFactor(2.8)
        break
      case 5:
      default:
        setHeadingWidthFactor(1.8)
    }
  }, [viewport])

  useEffect(() => {
    let projectsMap = new Map<string, Project[]>()
    projects.map(project => {
      if (!projectsMap.has(project.type.key)) {
        projectsMap.set(project.type.key, [])
      }
      projectsMap.get(project.type.key)?.push(project)
    })
    setProjectsMap(projectsMap)
  }, [projects])

  return (
    <Box sx={{ mb: "10vh" }}>
      <NavBar></NavBar>
      {
        [...projectsMap.keys()].map((projectTypeKey, index) => (
          <Box key={projectTypeKey + "-box"}>
            <ProjectTypeHeader name={projectsMap.get(projectTypeKey)![0].type.heading}
              midFlex={(projectsMap.get(projectTypeKey)![0].type.heading.length * headingWidthFactor) / 17}
              key={projectTypeKey}
              projectHeaderIndex={index}></ProjectTypeHeader>
            <Box sx={{
              display: "flex",
              flexFlow: "row wrap",
              justifyContent: "center",
              pl: "7vw",
              pr: "7vw",
            }}>
              {
                projectsMap.get(projectTypeKey)!.map(project => (
                  <Box sx={{
                    mt: "7vh",
                    display: "flex",
                    justifyContent: "center",
                    width: "350px",
                    ml: "1.5vw",
                    mr: "1.5vw",
                  }}
                    key={project.title}
                  >
                    <ProjectCard project={project}></ProjectCard>
                  </Box>
                ))
              }
            </Box>
          </Box>
        ))
      }
    </Box>
  )
}

export default Projects
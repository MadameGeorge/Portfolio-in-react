import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CardProject } from './CardProject';
import { projectsData } from "../projectsData"

export function CardGrid() {
  const projects = projectsData.map(project => {
    return (
      <Col>
        <CardProject
          key={project.id}
          {...project}
        />
      </Col>
    )
  })

  return (
    <Container>
      <Row>
        {projects}
      </Row>
    </Container>
  )
}

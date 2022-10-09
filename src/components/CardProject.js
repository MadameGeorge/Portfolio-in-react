import Card from 'react-bootstrap/Card';

export function CardProject(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle className="mb-3 text-muted">{props.subtitle}</Card.Subtitle>
        <Card.Link href="#">Learn more</Card.Link>
      </Card.Body>
    </Card>
  );
}

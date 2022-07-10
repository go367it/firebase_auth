import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

function App() {
  return (
    <div className="App">
      <Container>
        <Card>
          <Card.Body>This is some text within a card body.</Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default App;

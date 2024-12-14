import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Home() {
  return (
    <div className='carding' style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://www.bookswagon.com/productimages/images200/532/9788197489532.jpg" />
        <Card.Body>
          <Card.Title>Karna II : Son of Surya</Card.Title>
          <Card.Text>200RS</Card.Text>
          <Button variant="warning">BUY NOW</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/086/9780241252086.jpg" />
        <Card.Body>
          <Card.Title>White Nights</Card.Title>
          <Card.Text>150RS</Card.Text>
          <Button variant="warning">BUY NOW</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://www.bookswagon.com/productimages/images200/618/9781421599618.jpg" />
        <Card.Body>
          <Card.Title>20th Century</Card.Title>
          <Card.Text>250RS</Card.Text>
          <Button variant="warning">BUY NOW</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://www.bookswagon.com/productimages/images200/449/9781421522449.jpg" />
        <Card.Body>
          <Card.Title>Vagabond (VIZBIG Edition)</Card.Title>
          <Card.Text>400RS</Card.Text>
          <Button variant="warning">BUY NOW</Button>
        </Card.Body>
      </Card>
      
    </div>
  );
}

export default Home;

import React from 'react';
import Card from 'react-bootstrap/Card';

function TextExample() {
  return (

    <div className='news-container'>

<Card className='news' style={{ width: '16rem' }}>
      <Card.Body>
        <Card.Title className='news-title'>News Title</Card.Title>
        <Card.Text className='text-muted'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link className='news-link' href="#">Read more</Card.Link>
      </Card.Body>
    </Card>

<Card className='news' style={{ width: '16rem' }}>
      <Card.Body>
        <Card.Title className='news-title'>News Title</Card.Title>
        <Card.Text className='text-muted'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link className='news-link' href="#">Read more</Card.Link>
      </Card.Body>
    </Card>

<Card className='news' style={{ width: '16rem' }}>
<Card.Body>
  <Card.Title className='news-title'>News Title</Card.Title>
  <Card.Text className='text-muted'>
    Some quick example text to build on the card title and make up the
    bulk of the card's content.
  </Card.Text>
  <Card.Link className='news-link' href="#">Read more</Card.Link>
</Card.Body>
</Card>

<Card className='news' style={{ width: '16rem' }}>
      <Card.Body>
        <Card.Title className='news-title'>News Title</Card.Title>
        <Card.Text className='text-muted'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link className='news-link' href="#">Read more</Card.Link>
      </Card.Body>
    </Card>

    <Card className='news' style={{ width: '16rem' }}>
      <Card.Body>
        <Card.Title className='news-title'>News Title</Card.Title>
        <Card.Text className='text-muted'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link className='news-link' href="#">Read more</Card.Link>
      </Card.Body>
    </Card>

</div>

  );
}

export default TextExample;
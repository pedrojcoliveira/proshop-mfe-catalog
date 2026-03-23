import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Rating from './Rating';

const WishlistButton = lazy(() =>
  import('mfeWishlist/WishlistButton').catch(() => ({ default: () => null }))
);

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <div style={{ position: 'relative' }}>
        <Link to={`/catalog/product/${product._id}`}>
          <Card.Img src={product.image} variant='top' />
        </Link>
        <div style={{ position: 'absolute', top: '8px', right: '8px' }}>
          <Suspense fallback={null}>
            <WishlistButton product={product} />
          </Suspense>
        </div>
      </div>

      <Card.Body>
        <Link to={`/catalog/product/${product._id}`}>
          <Card.Title as='div' className='product-title'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as='h3'>${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;

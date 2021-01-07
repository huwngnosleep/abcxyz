import { Component } from "react";
import {
    Container, Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

import {CartContext} from '../contexts/Cart'

class Products extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [{
                "id": 1,
                "name": "Grenadine",
                "description": "nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse",
                "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
              }, {
                "id": 2,
                "name": "Tequila - Sauza Silver",
                "description": "velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros",
                "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
              }, {
                "id": 3,
                "name": "Bowl 12 Oz - Showcase 92012",
                "description": "sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
              }, {
                "id": 4,
                "name": "Puree - Kiwi",
                "description": "quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis",
                "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
              }, {
                "id": 5,
                "name": "Sponge Cake Mix - Chocolate",
                "description": "ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at",
                "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
              }, {
                "id": 6,
                "name": "Pork - Tenderloin, Fresh",
                "description": "tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus",
                "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
              }, {
                "id": 7,
                "name": "Laundry - Bag Cloth",
                "description": "felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
              }, {
                "id": 8,
                "name": "Kiwi Gold Zespri",
                "description": "pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque",
                "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
              }, {
                "id": 9,
                "name": "Coffee - Decafenated",
                "description": "dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit",
                "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
              }, {
                "id": 10,
                "name": "Wine - Masi Valpolocell",
                "description": "vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
              }, {
                "id": 11,
                "name": "Flour - Strong",
                "description": "nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in",
                "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
              }, {
                "id": 12,
                "name": "Chevril",
                "description": "lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum",
                "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
              }, {
                "id": 13,
                "name": "Crackers - Melba Toast",
                "description": "donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi",
                "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
              }, {
                "id": 14,
                "name": "Straw - Regular",
                "description": "aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
              }, {
                "id": 15,
                "name": "Chicken - White Meat With Tender",
                "description": "amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel",
                "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
              }, {
                "id": 16,
                "name": "Corn Kernels - Frozen",
                "description": "velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
              }, {
                "id": 17,
                "name": "Energy Drink - Franks Original",
                "description": "morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus",
                "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
              }, {
                "id": 18,
                "name": "Shrimp - Black Tiger 16/20",
                "description": "imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer",
                "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
              }, {
                "id": 19,
                "name": "Chocolate - Unsweetened",
                "description": "duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
              }, {
                "id": 20,
                "name": "Wine - White, Concha Y Toro",
                "description": "lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut",
                "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
              }]
        }
    }

    render() {
        const { products } = this.state;
        return (

            <Container>
                <h2>Products</h2>
                <Row>
                    {products.map(product => (
                        <Col sm="4">
                            <Card>
                                <CardImg top width="100%" src={product.imageUrl}/>
                                <CardBody>
                                    <CardTitle tag="h5">{product.name}</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">{product.id}</CardSubtitle>
                                    <CardText>{product.description}</CardText>
                                </CardBody>
                                <CartContext.Consumer>
                                  {context => (
                                    <Button onClick={() => context.addToCart(product)}>
                                      Add to cart
                                    </Button>
                                  )}
                                </CartContext.Consumer>
                                
                            </Card>
                        </Col>
                    ) )}
                </Row>
            </Container>
        )
    }
}

export default Products;
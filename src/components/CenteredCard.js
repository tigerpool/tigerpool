import React from 'react';
import { Card, CardTitle, Row, Col } from 'reactstrap';

const CenteredCard = ({ children, title: title }) => (
    <Row className="form-card-row">
        <Col sm="3"></Col>
        <Col sm="6">
            <Card body>
                <CardTitle className="form-card-title">{title}</CardTitle>
                {children}
            </Card>
        </Col>
        <Col sm="3"></Col>
    </Row>
);

export default CenteredCard;
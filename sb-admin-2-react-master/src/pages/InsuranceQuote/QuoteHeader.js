import React from "react";
import ReusableInput from "./ReusableInput"; // Adjust the import path as necessary
import './InsuranceQuote.css'; // Import the custom CSS file
import DropdownList from '../../components/DropdownList';
import { Container, Card, Row, Col, Form } from 'react-bootstrap'; // Import Bootstrap components

const QuoteHeader = () => {
    const handleSelect = (item) => {
        console.log('Selected item:', item);
    };

    return (
        <Container className="my-5">
            <Card className="shadow-lg border-0">
                <Card.Body className="d-flex flex-column">
                    <div className="text-left mb-4">
                        <h2 className="heading">Quote Risk</h2>
                    </div>
                    <div className="text-left mb-4">
                        <h2 className="heading">Quote Header</h2>
                    </div>
                    <Form className="user flex-grow-1">
                        <Row>
                            <Col md={ 12 } className="mb-3">
                                <ReusableInput
                                    label="Client Name"
                                    id="clientName"
                                    type="text"
                                    placeholder="Client name"
                                    className="form-control" // Use Bootstrap's form-control for consistent styling
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={ 12 } className="mb-3">
                                <ReusableInput
                                    label="Client Address"
                                    id="clientAddress"
                                    type="text"
                                    placeholder="Address details"
                                    className="form-control" // Use Bootstrap's form-control for consistent styling
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={ 6 } className="mb-3">
                                <DropdownList
                                    label="Branch Name"
                                    lookupCode="branchList" // This will load the "branchList" from the JSON file
                                    onSelect={ handleSelect }
                                />
                            </Col>
                            <Col md={ 6 } className="mb-3">
                                <DropdownList
                                    label="Select Status"
                                    lookupCode="statusList" // This will load the "statusList" from the JSON file
                                    onSelect={ handleSelect }
                                />
                            </Col>
                        </Row>
                    </Form>
                    <hr />
                </Card.Body>
            </Card>
        </Container>
    );
};

export default QuoteHeader;

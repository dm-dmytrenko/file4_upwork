import React from 'react';
import { Col, Form } from 'react-bootstrap';

interface CustomFormFieldProps {
    label: string;
    placeholder: string;
  }

const CustomFormField: React.FC<CustomFormFieldProps> = ({ label, placeholder }) => (
  <Col md={6} xs={12}>
    <Form.Group className="mb-4" controlId="">
      <Form.Label className="control-label">{label}</Form.Label>
      <Form.Control
        className="form-control-custom"
        type="text"
        placeholder={placeholder}
      />
    </Form.Group>
  </Col>
);

export default CustomFormField;
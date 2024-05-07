import React from 'react';

import {Col, Form, Row} from "react-bootstrap";

import CustomFormField from '../../../features/customTextField/custom-text-field';
import './personalDetails.scss'

interface Typo {
  className?: string;
  children?: any;
}

export const Heading3 = (params: Typo, { ...props }) => {
  const { className, children } = params
  return (
      <h3
          className={`${className}`}
          {...props}
      >
          {children}
      </h3>
  )
}

const PersonalDetails: React.FC = () => {
  return (
    <>
        <main className="personal-detail-page">
            <div className="container-sm">
                <div className="mb-4 text-center">
                    <Heading3 className="page-title mb-5">Personal Contact Details</Heading3>
                </div>
                <Row>
                    <CustomFormField placeholder='Enter your name' label='NAME'/>
                    <CustomFormField placeholder='Enter your email' label='EMAIL'/>
                    <CustomFormField placeholder='Enter your phone' label='PHONE'/>
                    <CustomFormField placeholder='Enter your gender' label='GENDER'/>
                    <CustomFormField placeholder='Enter your age' label='AGE'/>
                    <CustomFormField placeholder='Enter your profession' label='PROFESSION'/>
                    <CustomFormField placeholder='Enter your cell' label='CELL'/>
                    <CustomFormField placeholder='Enter your country' label='COUNTRY'/>
                    <CustomFormField placeholder='Enter your address' label='ADDRESS'/>
                    <CustomFormField placeholder='Enter your city' label='CITY'/>
                    <CustomFormField placeholder='Enter your states' label='STATES'/>
                    <CustomFormField placeholder='Enter your zip' label='ZIP'/>
                </Row>
                <Row>
                    <Col xs={12}>
                        <div className="mb-3">
                            <Form.Group className="mb-4" controlId="">
                                <Form.Label className="control-label mb-3">Enquiry in regards to:</Form.Label>
                                <div className="d-grid gap-1">
                                    <div className="d-flex gap-md-4 gap-2 mb-md-0 mb-4 align-items-center flex-wrap">
                                        <label>Additional Services:</label>
                                        {/* <ReactSelect className="react-select-2" styles={customStylesSelect} options={AdditionalServices} placeholder='Additional Services' /> */}
                                    </div>
                                    <Form.Check className="text-14" type="checkbox" label="Technical" />
                                    <Form.Check className="text-14" type="checkbox" label="General" />
                                    <Form.Check className="text-14" type="checkbox" label="Payment" />
                                </div>
                            </Form.Group>
                        </div>
                    </Col>
    
                </Row>
            </div>
        </main>
    </>
    );
  };
  
  export default PersonalDetails;
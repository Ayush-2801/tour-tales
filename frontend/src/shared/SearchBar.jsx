import React from 'react'
import './Search-bar.css'
import {Col,Form, FormGroup} from 'reactstrap'

const SearchBar = () => {
  return (
    <Col lg="12">
        <div className="search_bar">
            <Form className='d-flex align-items-center gap-4'>
                <FormGroup className='d-flex gap-3 form_group form_group-fast '>
                    <span>
                    <i class="ri-map-pin-line"></i>
                    </span>
                    <div>
                        <h6>Loction</h6>
                        <input type="text" placeholder='Where are you going?' />
                    </div>
                </FormGroup>
                <FormGroup className='d-flex gap-3 form_group form_group-fast '>
                    <span>
                    <i class="ri-pin-distance-line"></i>
                    </span>
                    <div>
                        <h6>Distance</h6>
                        <input type="number" placeholder='distance k/m' />
                    </div>
                </FormGroup>
                <FormGroup className='d-flex gap-3 form_group form_group-last '>
                    <span>
                    <i class="ri-group-fill"></i>
                    </span>
                    <div>
                        <h6>Max People</h6>
                        <input type="number" placeholder='Where are you going?' />
                    </div>
                </FormGroup>
            </Form>
        </div>
    </Col>
  )
}

export default SearchBar
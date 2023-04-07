import React from 'react'
import TourCard from '../../shared/TourCard'
import {Col} from 'reactstrap';
import tourData from '../../assets/data/tours'


const FeaturedTourList = () => {
  return (
    <>
    {tourData?.map(tours=>(
        <Col lg="3" className='mb-4' key={tours.id}>
            <TourCard tours={tours}/>
        </Col>
    ))}
    </>
  );
};

export default FeaturedTourList

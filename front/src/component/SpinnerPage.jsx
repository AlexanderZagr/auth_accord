import React from "react";
import { Spinner } from 'react-bootstrap';

const SpinnerPage = () => {
  return (
    <Spinner animation="border" variant="primary" role="status">
       <span className="sr-only">Loading...</span>
     </Spinner>
  );
}

export default SpinnerPage;
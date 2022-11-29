import React from 'react';

const Bootstrap = () => {
    return (
        <div className="container">
            <div className="row mt-3">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header">
                            <h4>Lorem ipsum dolor.</h4>
                        </div>
                        <div className="card-body">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dolor eaque, et hic illum
                            incidunt, ipsum molestias nam optio possimus quam repellat vitae voluptatum. Atque earum eos
                            est minima quos!
                        </div>
                        <div className="card-footer">
                            <button type="button" className="btn btn-success">CLick me!</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bootstrap;
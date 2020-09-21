import React from 'react';

function Patients(){
    return (
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
         <div className="input-group"> <span className="input-group-addon">Filter</span>
            <input id="filter" type="text" className="form-control" placeholder="Type here..." />
        </div>
          <table className="table table-striped table-sm">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                </tr>
            </tbody>
            </table>
        </main>
    );
}

export default Patients;

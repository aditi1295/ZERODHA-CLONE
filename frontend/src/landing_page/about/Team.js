import React from 'react';

function Team() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-4 text-center'>
                    <img src='media/images/Nikhil.jpg' style={{width:"60%",borderRadius:"100%"}}/>
                    <h5  className="mt-3  text-muted">Nikhil Kamath</h5>
                    <p className="text-grey text-center">Co-founder & CFO</p>
                </div>
                <div className='col-4 text-center'>
                    <img src='media/images/KailashNadh.jpg'style={{width:"60%",borderRadius:"100%"}}/>
                    <h5  className="mt-3   text-muted">Dr. Kailash Nadh</h5>
                    <p className="text-grey text-center">CTO</p>
                </div>
                <div className='col-4 text-center'>
                    <img src='media/images/VenuMadhav.jpg'style={{width:"60%",borderRadius:"100%"}}/>
                    <h5  className="mt-3   text-muted">Venu Madhav</h5>
                     <p className="text-grey text-center">COO</p>
                </div>
            </div>
            <div className='row'>
                <div className='col-4 text-center'>
                    <img src='media/images/SeemaPatil.jpg'style={{width:"60%",borderRadius:"100%"}}/>
                    <h5  className="mt-3    text-muted">Seema Patil</h5>
                    <p className=" text-center text-grey">Director</p>
                </div>
                <div className='col-4 text-center'>
                    <img src='media/images/KarthikRangappa.jpg'style={{width:"60%",borderRadius:"100%"}}/>
                    <h5  className=" mt-3 text-muted">Karthik Rangappa</h5>
                    <p className="  text-grey">Chief of Education</p>
                </div>
                <div className='col-4 text-center'>
                    <img src='media/images/AustinPrakesh.jpg'style={{width:"60%",borderRadius:"100%"}}/>
                    <h5  className=" mt-3 text-muted">Austin Prakesh</h5>
                     <p className="  text-grey">Director Strategy</p>
                </div>
            </div>
        </div>
      );
}

export default Team;
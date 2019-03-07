import React from 'react';
import GridListTile from '@material-ui/core/GridListTile';

// Styling
import './DonorProfileTile.css';


class DonorProfileTile extends React.Component{
    render(){
        
    return (
        <GridListTile className='gridtile'>
            <div >
                <div>
                <img className='imgUser' 
                    src="https://picsum.photos/200/300"
                    alt=" "
                />
                </div>
                <div className='userInfo'>
                <h3>{this.props.name}</h3>
                <h5>{this.props.city} - {this.props.country}</h5>
                <h5>Blood Type: {this.props.bloodType}</h5>
                </div>
            </div>
        </GridListTile>
        
    )
};

}

export default DonorProfileTile;
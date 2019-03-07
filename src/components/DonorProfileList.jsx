import React from 'react';
import GridList from '@material-ui/core/GridList';
import DonorProfileTile from './DonorProfileTile';
// Styling
import './DonorProfileList.css';


class DonorProfileList extends React.Component{
  render(){
    const inline ={
      margin:0,
      padding:5,
  }
      return (
        <GridList cellHeight={430} cols={2} className='root' style={inline}>
          {this.props.profiles.map(user => (
            <DonorProfileTile className='tile' key={user._id}
              name={user.Name}
              city={user.City}
              country={user.Country}
              bloodType={user.BloodType}
              hospital={user.Hopitals}/>
            ))}
        </GridList>
      );
    }
}
  
  export default DonorProfileList;
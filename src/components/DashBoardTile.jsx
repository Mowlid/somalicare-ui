import React from 'react';
import {Link} from 'react-router-dom';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

// Styling
import './DashBoardTile.css';


class DashBoardTile extends React.Component{
    render(){
        const inline = {width:'35%'};
        const bgcolor = {'backgroundColor':'rgba(243, 26, 26, 0.8)'}
        
    return (
        <GridListTile className='gridtile'>
        <Link to={this.props.link}>
          <img className='img' style={inline}
            src={this.props.image}
            alt=" "
          />
            <GridListTileBar className='tilebar' style={bgcolor}
                title={this.props.title}
            />
            </Link>
            { console.log(this.props.hospital) }
        </GridListTile>
    )
};

}

export default DashBoardTile;
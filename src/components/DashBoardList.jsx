import React from 'react';
import GridList from '@material-ui/core/GridList';
import DashBoardTile from './DashBoardTile';
// Styling
import './DashBoardList.css';


class DashBoardList extends React.Component{
  render(){
    const inline ={
      margin:0,
      padding:5
  }
      return (
        <GridList cellHeight={430} cols={2} className='root' style={inline}>
          {this.props.dashBoardTiles.map(tile => (
            <DashBoardTile className='tile' key={tile.id}
              id={tile.id}
              title={tile.title}
              image={tile.image}
              link={tile.link} />
            )).sort((a,b) => a.id < b.id)}
        </GridList>
      );
    }
}
  
  export default DashBoardList;
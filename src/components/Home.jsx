import React from 'react';
import request from "request-promise-native";

import './Home.css';
import ButtonBar from './ButtonBar';
import Banner from './Banner';
import Footer from './Footer';
import HomeGridContainer from '../containers/HomeGridContainer';


class Home extends React.Component{
    constructor(props){
        super(props);

        this.state = {
        }
        this.getDashBoardTiles = this.getDashBoardTiles.bind(this);

        this.getDashBoardTiles();
        
    
    }
     getDashBoardTiles(){
        const options = {
          uri: "http://localhost:9000/tiles",
          json: true
        };
        request(options)
          .then(dashBoardTiles => {
            this.props.receiveTiles(dashBoardTiles);
          })
          .catch(err => {
            console.log(`Error getting recipes ${err}`);
          });
        
      }

    render(){
        return (
            
            <div className='wrapper'>
                <div className='content'>
                    <ButtonBar />
                    <Banner />
                    <HomeGridContainer  />
                    <Footer className='footer' />
                </div>
            </div>
        )
    };
}
export default Home;
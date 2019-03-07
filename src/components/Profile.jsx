import React from 'react';
import request from "request-promise-native";
import './Home.css';
import ButtonBar from './ButtonBar';
import Banner from './Banner';
import Footer from './Footer';
import ProfileGridContainer from '../containers/ProfileGridContainer';

class Profile extends React.Component{
    constructor(props){
        super(props);

        this.state = {
        }
        this.getDonorProfiles = this.getDonorProfiles.bind(this);

        this.getDonorProfiles();
        
    
    }
     getDonorProfiles(){
        const options = {
          uri: "http://localhost:9000/records",
          json: true
        };
        request(options)
          .then(profile => {
            this.props.receiveProfiles(profile);
          })
          .catch(err => {
            console.log(`Error getting profiles ${err}`);
          });
        
      }

    render(){
        return (
            <div className='wrapper'>
                <div className='content'>
                    <ButtonBar />
                    <Banner />
                    <ProfileGridContainer />
                    <Footer className='footer' />
                </div>
            </div>
        )
    };
}
export default Profile;
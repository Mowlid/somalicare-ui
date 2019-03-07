import React from 'react';
import './Home.css';
import ButtonBar from './ButtonBar';
import Banner from './Banner';
import Footer from './Footer';
import DonorForm from './DonorForm';

class Donor extends React.Component{
    render(){
        return (
            <div className='wrapper'>
                <div className='content'>
                    <ButtonBar />
                    <Banner />
                    <DonorForm />
                    <Footer className='footer' />
                </div>
            </div>
        )
    };
}
export default Donor;
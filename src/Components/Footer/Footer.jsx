import React from 'react';
import { Button, Home } from '../index';
import FiberSmartRecordIcon from '@material-ui/icons/FiberSmartRecord';
import {IconButton} from "@material-ui/core";
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {

    const styles = {

        mediumIcon: {
            width: 60,
            height: 60,
        },

    };

    return (
        <>
            <div className='footer-container'>
                <section className='footer-subscription'>
                    <p className='footer-subscription-heading'>
                        Join the Adventure newsletter to receive our best Event deals
                    </p>
                    <p className='footer-subscription-text'>
                        You can unsubscribe at any time.
                    </p>
                    <div className='input-areas'>
                        <form>
                            <input
                                className='footer-input'
                                name='email'
                                type='email'
                                placeholder='Your Email'
                            />
                            <Button buttonStyle='btn--outline'>Subscribe</Button>
                        </form>
                    </div>
                </section>
                <div className='footer-links'>
                    <div className='footer-link-wrapper'>
                        <div className='footer-link-items'>
                            <h2>About Us</h2>
                            <Link to='/sign-up'>How it works</Link>
                            <Link to='/'>Testimonials</Link>
                            <Link to='/'>Careers</Link>
                            <Link to='/'>Investors</Link>
                            <Link to='/'>Terms of Service</Link>
                        </div>
                        <div className='footer-link-items'>
                            <h2>Contact Us</h2>
                            <Link to='/'>Contact</Link>
                            <Link to='/'>Support</Link>
                            <Link to='/'>Destinations</Link>
                            <Link to='/'>Sponsorships</Link>
                        </div>
                    </div>
                    <div className='footer-link-wrapper'>
                        <div className='footer-link-items'>
                            <h2>Videos</h2>
                            <Link to='/'>Submit Video</Link>
                            <Link to='/'>Ambassadors</Link>
                            <Link to='/'>Agency</Link>
                            <Link to='/'>Influence</Link>
                        </div>
                        <div className='footer-link-items'>
                            <h2>Social Media</h2>
                            <Link to='/'>Instagram</Link>
                            <Link to='/'>Facebook</Link>
                            <Link to='/'>Youtube</Link>
                            <Link to='/'>Twitter</Link>
                        </div>
                    </div>
                </div>
                <section className='social-media'>
                    <div className='social-media-wrap'>
                        <div className='footer-logo'>
                            <Link to='/' className='social-logo'>
                                Smart Events
                                <IconButton iconStyle={styles.mediumIcon}>
                                    <FiberSmartRecordIcon className="logo-icon" />
                                </IconButton>

                            </Link>
                        </div>
                        <small className='website-rights'>Smart Events © {new Date().getFullYear()}</small>
                        <div className='social-icons'>
                            <Link
                                class='social-icon-link facebook'
                                to='/'
                                target='_blank'
                                aria-label='Facebook'
                            >
                                <i className='fab fa-facebook-f' />
                            </Link>
                            <Link
                                class='social-icon-link instagram'
                                to='/'
                                target='_blank'
                                aria-label='Instagram'
                            >
                                <i className='fab fa-instagram' />
                            </Link>
                            <Link
                                class='social-icon-link youtube'
                                to='/'
                                target='_blank'
                                aria-label='Youtube'
                            >
                                <i className='fab fa-youtube' />
                            </Link>
                            <Link
                                class='social-icon-link twitter'
                                to={Home}
                                target='_blank'
                                aria-label='Twitter'
                            >
                                <i className='fab fa-twitter' />
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Footer;

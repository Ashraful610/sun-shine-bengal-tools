import React from 'react';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    let month = date.getMonth()+1;
    let tarikh = date.getDate();
        if(tarikh < 10){
            tarikh ='0'+ tarikh;
        }
        if(month < 10){
            month = '0'+ month;
        }
    return (
        <footer className=" bg-black/90 xl:p-12 sm:p-10 p-5 py-2 text-base-content shadow-inner ">
            <div className="footer">
                <div>
                    <span className="footer-title text-white">Services</span> 
                    <a className="link link-hover text-white">Branding</a> 
                    <a className="link link-hover text-white">Design</a> 
                    <a className="link link-hover text-white">Marketing</a> 
                </div> 
                <div>
                    <span className="footer-title text-white">Company</span> 
                    <a className="link link-hover text-white">About us</a> 
                    <a className="link link-hover text-white">Contact</a> 
                    <a className="link link-hover text-white">Jobs</a> 
                </div> 
                <div>
                    <span className="footer-title text-white">Legal</span> 
                    <a className="link link-hover text-white">Terms of use</a> 
                    <a className="link link-hover text-white">Privacy policy</a> 
                    <a className="link link-hover text-white">Cookie policy</a>
                </div> 
                <div>
                    <span className="footer-title text-white">Newsletter</span> 
                    <div className="form-control sm:w-80 w-72">
                        <label className="label">
                            <span className="label-text text-white">Enter your email address</span>
                        </label> 
                        <div className="relative subscribe">
                            <input type="text" placeholder="username@site.com" className="input input-bordered w-full sm:pr-16" /> 
                            <button className="btn shadow-inner  border-0 absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='p-3'>
                <h2 className='sm:text-lg text-sm text-white italic h-full flex items-center justify-center'>
                  <span className='text-2xl mx-2'>&copy;   </span>  
                   Copy right {year + ' ' + month + ' ' + tarikh} Ashraful Alam
                </h2>
            </div>
      </footer>
    );
};

export default Footer;
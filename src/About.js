function About(){
    return(
        <div>
            <section id="About-para">
            <h2>ABOUT US</h2>
            <div className="para-container">
                <div className="para-row">

                    <div className="para-col">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                             <ul>
                                <li><i className="fa fa-check" aria-hidden="true" ></i>Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
                                <li><i className="fa fa-check" aria-hidden="true"></i>Duis aute irure dolor in reprehenderit in voluptate velit</li>
                                <li><i className="fa fa-check" aria-hidden="true" ></i>Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
                             </ul>  
                    </div>

                    <div className="para-col2">
                        <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <div className="btn2">
                                <button>Learn More</button>
                            </div>
                    </div>
                </div>
            </div>
            </section>
            
        
        </div>
    )
}
export default About;
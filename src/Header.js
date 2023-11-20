
function Header(){
    return(
        <div>
          <section id="banner">	
            <header class="head-section">
             <div class="head-container">
                <div class="header-row">
                  <div class="logo">
                    <h2>VESPERR</h2>
                  </div>

                 <nav class="head-navigation">
                  <ul class="head-list">
                    <li><a href="#About-para">About</a></li>
                    <li><a href="#Service">Services</a></li>
                    <li><a href="#Feature">Features</a></li>
                    <li class="dropdown-menu"><a href="#dropdown">DropDown <i class="fa fa-chevron-down" aria-hidden="true"></i></a>
                      <ul class="dropdown">
                        <li>DropDown1</li>
                        <li class="deepdropdown-menu">DeepDropDown<i class="fa fa-chevron-left" aria-hidden="true"></i>
                          <ul class="deepdropdown">
                            <li>DeepDropDown1</li>
                            <li>DeepDropDown2</li>
                            <li>DeepDropDown3</li>
                            <li>DeepDropDown4</li>
                            <li>DeepDropDown5</li>
                          </ul>
                        </li>
                        <li>DropDown2</li>
                        <li>DropDown3</li>
                        <li>DropDown4</li>
                      </ul>
                    </li>
                    <li><a href="#contact" class="cons">Contact</a></li>
                  </ul>
                </nav>
                
                <div class="head-bar">
                  <i class="fa fa-bars" aria-hidden="true"></i>
                </div>
              </div>
            </div>
            </header>
        </section>
       
             
      
        <section id="About">
            <div className="about-container">
                <div className="about-row">
                    <div className="about-col1">
                        <h1>Grow your business with Vesperr</h1>
                           <p> We are team of talented designers making websites with Bootstrap</p> 
                           
                    </div>
                    
                    <div className="about-col">
                      <img src="image/header.jpg" />  
                    </div> 

                </div>
            </div>
        </section>
               
        </div>
    )
}
export default Header;


import React from  "react" ;
import "./homepage.scss";
import business_ready from "../../images/business_ready.png";
import data_centralization from "../../images/data_centralization.png";
import schedule_refresh from "../../images/schedule_refresh.png";
import collect_together from "../../images/collect_together.png";
import squareAllData from "../../images/square_all-data.png";
import datawhere from "../../images/datawhere.png"
import Navbar from "../../components/navbar/navbar";
import Button from "../../components/button/button";
import sqaureImg from "../../images/square1.png";
import Footer from "../../components/footer/footer";
import { formerPageUrls} from "../../helper/helper";


function Homepage (){

    return(  
        <div>
           <Navbar/>
                <div class="container ">
                    <div class="row align-items-start connect-data-smarter">
                        <div class="col ">
                            <div className="connect-data-smarter__text">
                                <h1>Connect Data Smarter</h1>
                            <p className="connect-data-smarter-p">Connect your data across multiple platform to Tableau, Google sheets, Excel and More </p>
                                <div className="connect-data-smarter_btn-wrapper">
                                    <div>
                                        
                                        <Button buttonStyle="green-btn" buttonLink={formerPageUrls.signup}>
                                            Sign Up Free
                                        </Button>

                                    </div>
                                    <div className="connect-data-smarter_link">
                                      <a href={formerPageUrls.expert}> Speak with an Expert</a>
                                    </div>
                               </div>
                            </div>
                        </div>
                    <div class="col col-xs-12">
                           <div>
                                <img alt="" src={sqaureImg}/>

                           </div>
                        </div>
                     
                    </div>
                 <div className="what-can-you-do-with-metrics">
                        <div className="what-can-you-do-with-metrics_title-wrapper">
                            <h2 className="what-can-you-do-with-metrics_title"> What You Can DO WIth 101Metrics</h2>
                        </div>
                        <div class="row align-items-start">
                        
                        <div class=" col-md-3 col-xs-12">
                                <div>
                                    <img alt="" src={data_centralization}/>
                                </div>
                                <h2 className="what-can-you-do-with-metrics_sub-title"> CONNECT <br/>YOUR DATA SOURCE </h2>
                                <div>
                                    <p>
                                        No-Code Data Connection to Your
                                        Preferred Channel.
                                    </p>
                                </div>
                            </div>
                           <div class="col-md-3 col-xs-12 ">
                                <div>
                                    <img alt="" src={collect_together } />
                                </div>
                            <h2 className="what-can-you-do-with-metrics_sub-title"> COLLECT <br />ALL YOUR DATA TOGETHER </h2>
                                <div>
                                    <p>
                                        Sync all of your channels to easily
                                        manage orders in one place.
                                    </p>
                                </div>
                            </div>
                           <div class="col-md-3 col-xs-12 ">
                                <div>
                                    <img alt="" src={business_ready } />
                                </div>
                            <h2 className="what-can-you-do-with-metrics_sub-title">PRESENT<br /> BUSINESS READY REPORTING</h2>
                                <div>
                                    <p>
                                        All your Data is Processed and Business Ready for Analysis
                                    </p>
                                </div>
                            </div>
                           <div class="col-md-3 col-xs-12 ">
                                <div>
                                    <img alt="" src={schedule_refresh}/>
                                </div>
                            <h2 className="what-can-you-do-with-metrics_sub-title">FILTER <br />AND SCHEDULE REFRESHES </h2>
                                <div>
                                    <p>
                                        Generate only relevant data with
                                        embedded filters at source.
                                    </p>
                                </div>
                            </div>
                        </div>

                 </div>
                 
                    <div class="row align-self-start all-the-data-sources">
                        <div class="col all-the-data-sources-image">
                            <img alt="" src={squareAllData}/>
                        </div>
                        <div class="col all-the-data-sources-text ">
                                <h2>ALL THE DATA SOURCES YOU NEED</h2>
                        <p className="all-the-data-sources__explanation">
                                Don’t let Integration efforts impede your research. We partner with over 50+ platforms
                                and so that you can get started immediately, no integration work needed.
                                </p>
                        </div>
                        
                    </div>


                    <div class="row align-self-start data_where-you-need-it">
                        
                        <div class="col   data_where-you-need-it-text ">
                          <h2>DATA WHERE YOU NEED IT</h2>
                            <p>
                               Fetch data automatically from your preferred data source so you don’t have to copy/paste data for your app reports, analysis and dashboards ever again.
                            </p>
                        </div>
                        <div class="col data_where-you-need-it-image">
                            <img alt ="" src={datawhere} />
                        </div>

                    </div>
                  
                
                </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}
export default Homepage ;
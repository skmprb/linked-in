import React from 'react';
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';


function Widgets() {

    // const newsArticle = (heading, subtitle) => {
    //     <div className="widgets_article">
    //         <div className="widgets_articleLeft">
    //             <FiberManualRecordIcon/>
    //         </div>
    //         <div className="widgets_articleRight">
    //             <h4>{heading}</h4>
    //             <p>{subtitle}</p>
    //         </div>
    //     </div>
    // }

    return (
        <div className='widgets'>
            <div className="widgets_header">
                <h2>LinkedIn News</h2>
                <InfoIcon/>
            </div>
            
                <div className="widgets_article">
                    <div className="widgets_articleLeft">
                        <FiberManualRecordIcon/>
                    </div>
                <div className="widgets_articleRight">
                        <h4>My React project:</h4>
                        <p>I have created a React project</p>
                    </div>
                    
                </div>
                <div className="widgets_article">
                    <div className="widgets_articleLeft">
                        <FiberManualRecordIcon/>
                    </div>
                <div className="widgets_articleRight">
                        <h4>JavaScript:</h4>
                        <p>I Can do some basic js Projects</p>
                    </div>
                    
                </div>
                <div className="widgets_article">
                    <div className="widgets_articleLeft">
                        <FiberManualRecordIcon/>
                    </div>
                <div className="widgets_articleRight">
                        <h4>Web Development:</h4>
                        <p>Craeated a Web sites</p>
                    </div>
                    
                </div>
                <div className="widgets_article">
                    <div className="widgets_articleLeft">
                        <FiberManualRecordIcon/>
                    </div>
                <div className="widgets_articleRight">
                        <h4>DSA</h4>
                        <p>Basics</p>
                    </div>
                    
                </div>
                <div className="widgets_article">
                    <div className="widgets_articleLeft">
                        <FiberManualRecordIcon/>
                    </div>
                <div className="widgets_articleRight">
                        <h4>Python:</h4>
                        <p>OOPs</p>
                    </div>
                    
                </div>
                <div className="widgets_article">
                    <div className="widgets_articleLeft">
                        <FiberManualRecordIcon/>
                    </div>
                <div className="widgets_articleRight">
                        <h4>Java Frameworks</h4>
                        <p>Still Learning</p>
                    </div>
                    
                </div>
            
            
        </div>
    )
}

export default Widgets

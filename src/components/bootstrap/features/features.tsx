import React, { useState, useEffect } from "react";
import "../../../pages/index.css";
import "./features.css";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


import Link from "@docusaurus/Link";

/**
 * This file contains implementation of community frontend for home page
 *
 * @author Iva Utikalova
 */


const Feature = (props) => {
    
    return (
          <div className={"slider__slide "} >
            <div className="block">
                <p className="slide__titles">
                    <a href={"/blog/" + props.href}>{props.title}</a>
                </p>
                <div className="slide__name">
                    {props.name}
                </div>
            </div>
        </div>
    );
};


export const Features = () => {


    return (
        <div className="container-fluid text-center darker">
            <div className="features__container">
                <div className="features__header p-3 pt-lg-5 display-6">
                    <div >
                        Features
                    </div>
                    <div className="p-3 pb-lg-5 lead">
                        What are the features of the geovisto library? 
                        Geovisto offers users many tools that can be used to configure the map itself or help to understand the visualized data.
                        This tools can be add to your map and enable by your configuration.
                    </div>
                </div>
                <div className="features__wrapper p-3 pt-lg-5">
                    <div className="features__blocks">
                        <div className="features__block">
                            <a className="feature__block href" href="/docs/tools/basic">
                                <h5>Sidebar</h5>
                                <div>This is main tool for map configuration</div>
                            </a>
                        </div>
                        <div className="features__block">
                            <a className="feature__block href" href="/docs/tools/basic">
                                <h5>Info</h5>
                                <div>This tool can give user main informations about your map</div>
                            </a>
                        </div>
                        <div className="features__block">
                            <a className="feature__block href" href="/docs/tools/basic">
                                <h5>Selection</h5>
                                <div>Selection tool can be used for highlighting important object on map</div>
                            </a>
                        </div>
                        <div className="features__block">
                            <a className="feature__block href" href="/docs/tools/basic">
                                <h5>Legend</h5>
                                <div>Legend give user more informations about symbols printed on a map</div>
                            </a>
                        </div>
                        <div className="features__block">
                            <a className="feature__block href" href="/docs/tools/basic">
                                <h5>Themes</h5>
                                <div>User can pick his favorite theme for map</div>
                            </a>
                        </div>
                        <div className="features__block">  
                            <a className="feature__block href" href="/docs/tools/basic">
                                <h5>Timeline</h5>
                                <div>User can track how the measured data changed over time</div>
                            </a>
                        </div>
                        <div className="features__block">
                            <a className="feature__block href" href="/docs/tools/basic">
                                <h5>Filters</h5>
                                <div>Data can be filtered according to user-defined filters</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Features;

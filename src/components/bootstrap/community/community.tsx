import React, { useState, useEffect } from "react";
import "../../../pages/index.css";
import "./community.css";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { ArrowRight } from 'react-bootstrap-icons';
import { ArrowLeft } from 'react-bootstrap-icons';


import Link from "@docusaurus/Link";

/**
 * This file contains implementation of community frontend for home page
 *
 * @author Iva Utikalova
 */



const community_files = [
    "community_1.md",
    "community_2.md",
    "community_3.md",
    "community_4.md"

];

const Slide = (props) => {
    var nameClass = "";
    if (props.index === 0) {
        nameClass = "slide__prev"; 
    } else if (props.index === 1) {
        nameClass = "slide__active"; 
    } else if (props.index === 2) {
        nameClass = "slide__next"; 
    }
    
    return (
          <div className={"slider__slide " + nameClass} >
            <div className="block">
                <h5 className="slide__titles">
                    <a href={"/blog/" + props.href} className="href">{props.title}</a>
                </h5>
                <div className="slide__name">
                    {props.name}
                </div>
            </div>
        </div>
    );
};


export const Community = () => {

    const [slides, setSlide] = useState([]);

    useEffect(() => {   
        community_files.forEach(element => {
            const markdown = require('!!raw-loader!../../../../blog/' + element)?.default;
            
            var extractedMetadata = extractMetadata(markdown);
            extractedMetadata["id"] = element.split('.')[0];
            setSlide(slides => [...slides, extractedMetadata]);

        });
    },[]);

    function extractMetadata(markdown) {
        const frontMatter = markdown.split('---')[1];
        const metadataLines = frontMatter.split('\n').filter(line => line.trim() !== '');

        const metadata = {};
        metadataLines.forEach(line => {
            var [key, ...valueParts] = line.split(':').map(item => item.trim());
            key = key.split(" ")[1];

            metadata[key] = valueParts.join(':').replace(/(^"|"$)/g, '').trim();
        });

        metadata["tags"] = metadata["tags"] ? metadata["tags"].split(',').map(tag => tag.trim()) : [];

        return metadata;
    }


    const handleNext = (e) => {
        var active = document.querySelectorAll(".slide__active");
        var prev = document.querySelectorAll(".slide__prev");
        var next = document.querySelectorAll(".slide__next");

        [].forEach.call(active, function(el) {
            el.classList.remove("slide__active");
            el.classList.add("slide__prev");
        });


        [].forEach.call(next, function(el) {
            let sibling = el.nextSibling;
            if (sibling) {
                sibling.classList.add("slide__next");
            } else {
                e.target.classList.add("hidden");
                document.getElementById("prev").classList.remove("hidden");
            }
            el.classList.remove("slide__next");
            el.classList.add("slide__active");
        });

        [].forEach.call(prev, function(el) {
            el.classList.remove("slide__prev");
        });
    }

    const handlePrev = (e) => {
        var active = document.querySelectorAll(".slide__active");
        var prev = document.querySelectorAll(".slide__prev");
        var next = document.querySelectorAll(".slide__next");

        [].forEach.call(active, function(el) {
            el.classList.remove("slide__active");
            el.classList.add("slide__next");
        });

        [].forEach.call(prev, function(el) {
            let sibling = el.previousSibling;
            if (sibling) {
                sibling.classList.add("slide__prev");
            } else {
                e.target.classList.add("hidden");
                document.getElementById("next").classList.remove("hidden");
            }
            el.classList.remove("slide__prev");
            el.classList.add("slide__active");
        });

        [].forEach.call(next, function(el) {
            el.classList.remove("slide__next");
        });
    
    }

    return (
        <div className="community-container container-fluid text-center ">
            <div>
                <div className="community w-100 p-3 pt-lg-5 display-6">
                    <div >
                        Our Community
                    </div>
                    <div className="w-100 p-3  lead">
                        Stay up to date with library updates.
                    </div>
                    <div className="community-button w-100 p-3 pb-lg-5 lead">
                    <Link to="/blog" className="ps-lg-3">
                        <Button variant="default">Go to Community</Button>
                    </Link>
                </div>
                </div>
                <div className="slider__container">
                    <div className="slider__wrapper">
                        {slides.map((slide, index) => (
                            <Slide 
                                key={slide["id"]} 
                                title={slide["title"]}
                                name={slide["name"]}
                                index={index}
                                href={slide["id"]}
                            />       
                        ))}
                    </div>
                    <div className="slider__actions">
                        <button className="slider__arrow slider__arrow--prev swiper-button-prev" id="prev" role="button" aria-label="Previous slide" aria-disabled="false" onClick={handlePrev}></button>
                        <button className="slider__arrow slider__arrow--prev swiper-button-next" id="next" role="button" aria-label="Next slide" aria-disabled="false" onClick={handleNext}></button>
                    </div>
                </div>

            </div>
        </div>
    );

};

export default Community;

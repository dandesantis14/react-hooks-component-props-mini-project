import React from "react";

function About({image,about}) {

    if (image != null && image.length > 0){
        return (
            <aside>
                <img src={image} alt="blog logo"/>
                <p>{about}</p>
            </aside>
        );
    } else {
        return (
            <aside>
                <img src="https://via.placeholder.com/215" alt="blog logo"/>
                <p>{about}</p>
            </aside>
        );
    }
}

export default About;
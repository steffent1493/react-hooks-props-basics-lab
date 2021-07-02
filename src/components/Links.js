import React from "react";

function Links({githublink, linkedinlink}) {
    return (
     <h3>Links
     <a href={githublink}>{githublink}</a>
     <a href={linkedinlink}>{linkedinlink}</a>
     </h3>
    )
}

export default Links;
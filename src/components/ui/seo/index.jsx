import React from 'react';
import {Helmet} from "react-helmet";

function Seo(
    {
        title = false,
        description = false,
        image = false,
    }
) {

    const url = window.location.href;

    return (

        <Helmet>
            {title && <title>{title}</title>}
            {title && <meta property="og:title" content={title} />}
            {description && <meta name="description" content={description} />}
            {description && <meta property="og:description" content={description} />}
            {image && (
                <meta property="og:image" content={image} />
            )}
            <meta name="author" content="Emin Azəroğlu" />
            <link rel="canonical" href={url} />
            <meta name="robots" content="index, follow" />
            <meta property="og:url" content={url} />
            <meta name="twitter:card" content="summary_large_image" />
        </Helmet>
    );
}

export default Seo;
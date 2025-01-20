import React from 'react';
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, WhatsappShareButton, WhatsappIcon, InstapaperShareButton, InstapaperIcon } from 'react-share';

const Share = ({ handleShare, url, title }) => {



    return (
        <div className='flex items-center justify-center gap-5'>
            <FacebookShareButton onClick={handleShare} url={url} quote={title}>
                <FacebookIcon size={40} round={true} />
            </FacebookShareButton>
            <TwitterShareButton onClick={handleShare} url={url} title={title}>
                <TwitterIcon size={40} round={true} />
            </TwitterShareButton>
            <WhatsappShareButton onClick={handleShare} url={url} quote={title}>
                <WhatsappIcon size={40} round={true} />
            </WhatsappShareButton >
        </div>
    );
};

export default Share;
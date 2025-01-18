import React from 'react';
import useTags from '../../../Custom/Hooks/useTags';
import Marquee from "react-fast-marquee";

const Tags = () => {
    const [allTags] = useTags();
    return (
        <div className='lg:py-10 py-5 lg:px-10 px-5 bg-base-100 rounded-md shadow center'>
            <h1 className='text-center lg:text-3xl text-2xl font-semibold text-neutral'>Available Tags</h1>
            <div className='mt-5'>
                <Marquee className='mx-2 bg-secondary'>
                    {
                        allTags?.map(tag => <p key={tag._id} className='px-4 text-white underline'>{tag.tag}</p>)
                    }
                </Marquee>
            </div>
        </div>
    );
};

export default Tags;
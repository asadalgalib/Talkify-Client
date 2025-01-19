import { useNavigate } from 'react-router-dom';

const ShowPost = ({ post, refetch }) => {
    const navigate = useNavigate()

    const handleDetails = (id) => {
        navigate(`/details/${id}`);
    }


    return (
        <div onClick={() => handleDetails(post?._id)} className="rounded-md bg-base-100 w-full py-4 shadow cursor-pointer">
            <div className='px-2'>
                <div className='flex items-end gap-3'>
                    <div className="avatar">
                        <div className="mask mask-squircle w-14">
                            <img src={post?.authorImage} />
                        </div>
                    </div>
                    <div>
                        <h1 className='font-semibold'>{post?.authorName}</h1>
                        <div className='flex items-center gap-2 mt-1'>
                            <p className='text-sm'>{post?.currentDate}</p>
                            <p className='text-sm'><span>{post.currentTime}</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-5 mt-3'>
                <h2 className='font-medium'>{post?.title}</h2>
            </div>
            <div className='px-5 mt-1'>
                {post?.tag && <h1>#{post?.tag}</h1>}
            </div>
            <div className='px-10 my-1'>
                {post?.postImage && (
                    <figure className='w-full'>
                        <img className='w-full rounded-md' src={post?.postImage} alt="photo" />
                    </figure>
                )}
            </div>
            <div className='mt-1 px-5 flex items-center justify-between'>
                <div className='flex gap-2'>
                    <span className='text-sm font-semibold badge-secondary px-2 py-1 rounded-md text-white'>
                        {post?.upVote} Like
                    </span>
                    <span className='text-sm font-semibold badge-secondary px-2 py-1 rounded-md text-white'>
                        {post?.downVote} Dislike
                    </span>
                </div>
                <div className='flex gap-2'>
                    {post?.comment && (
                        <span className='text-sm badge-secondary px-2 py-1 rounded-md text-white'>
                            {post?.comment} Upvote
                        </span>
                    )}
                    {post?.share && (
                        <span className='text-sm badge-secondary px-2 py-1 rounded-md text-white'>
                            {post?.share} Upvote
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ShowPost;
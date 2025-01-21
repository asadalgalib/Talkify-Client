import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import useAxiosPublic from '../../Custom/Hooks/useAxiosPublic';

const ShowPost = ({ post, refetch }) => {
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();

    const handleDetails = (id) => {
        navigate(`/details/${id}`);
    }

    const { data: share, refetch: shareRefech } = useQuery({
        queryKey: ['share', post?._id],
        queryFn: async () => {
            const res = await axiosPublic(`/share/${post?._id}`);
            console.log(share)
            return res.data;
        }
    });

        const { data: comment, refetch: commentRefech } = useQuery({
            queryKey: ['comment', post?._id],
            queryFn: async () => {
                const res = await axiosPublic(`/comment/${post?._id}`);
                console.log(comment);
                return res.data;
            }
        });

    return (
        <div onClick={() => handleDetails(post?._id)} className="rounded-md bg-base-100 w-full py-4 shadow cursor-pointer">
            <div className='px-2'>
                <div className='flex items-end gap-3'>
                    <div className="avatar">
                        <div className="mask rounded-full w-14">
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
            <div className='mt-1 px-5 flex flex-wrap items-center justify-start gap-2'>
                <div className=''>
                    <span className='flex text-sm  font-semibold badge-secondary px-2 py-1 rounded-md text-white'>
                        {post?.upVote} Like
                    </span>
                </div>
                <div>
                    <span className='text-sm font-semibold badge-secondary px-2 py-1 rounded-md text-white'>
                        {post?.downVote} Dislike
                    </span>
                </div>
                <div className=''>
                    <span className='text-sm font-semibold badge-secondary px-2 py-1 rounded-md text-white'>
                        {comment ? comment?.length : 0} Comment
                    </span>
                </div>
                <div>
                    <span className='text-sm font-semibold badge-secondary px-2 py-1 rounded-md text-white'>
                        {share ? share?.length : 0} Share
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ShowPost;
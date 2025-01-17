import { useForm } from 'react-hook-form';
import useAuth from '../../../Custom/Hooks/useAuth';
import useAxiosPublic from '../../../Custom/Hooks/useAxiosPublic'
import useAxiosSecure from '../../../Custom/Hooks/useAxiosSecure'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const image_hosting_key = import.meta.env.VITE_image_hosting_key;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddPost = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    const navigate = useNavigate()
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure()
    let postImage;

    let now = new Date()
    const currentDate = now.toLocaleString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    if (hours === 0) hours = 12;
    if (minutes < 10) minutes = '0' + minutes;
    const currentTime = hours + ':' + minutes + ' ' + ampm;

    const onSubmit = async (data) => {

        const { title, tag, description, image } = data;
        const { displayName: authorName, photoURL: authorImage, email: authorEmail } = user;
        const upVote = 0;
        const downVote = 0;;
        // image upload
        if (image.length > 0) {
            const imageFile = { image: data.image[0] }
            const res = await axiosPublic.post(image_hosting_api, imageFile, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });
            postImage = res.data.data.display_url;
        }

        const postData =
            { authorName, authorImage, authorEmail, title, tag, postImage, description, upVote, downVote, currentDate, currentTime };
        console.log(postData);
        // post data 
        axiosSecure.post('/post', postData)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Posted Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    reset();
                    navigate('/user/dashboard/myposts');
                }
            })
            .catch(err => {
                console.log(err.code);
            })
    }

    return (
        <div className='grid grid-cols-1 items-center min-h-screen'>
            <div className='lg:px-14 md:px-8 px-4 lg:mx-14 md:mx-8 mx-4 lg:py-16 md:py-10 py-8 minh-[50vh] bg-base-100 rounded-md'>
                <div>
                    <h1 className='lg:text-3xl text-2xl font-semibold text-center text-neutral'>Create Post</h1>
                </div>
                <div className="w-full max-w-xl mx-auto mt-5">
                    <form onSubmit={handleSubmit(onSubmit)} className="">
                        <div className='lg:grid grid-cols-2 gap-4 items-center'>
                            <div className="form-control">
                                <p className='text-neutral my-2'>Post Title</p>
                                <label className="input input-bordered  flex items-center gap-2">
                                    <input type="text" {...register('title', {
                                        required: 'Title is required', minLength: { value: 3 }
                                    })}
                                        className="grow bg-base-100" placeholder="name" />
                                </label>
                            </div>
                            <div className="form-control">
                                <p className='text-neutral my-2'>Tag</p>
                                <label className=" flex items-center gap-2">
                                    <select defaultValue='default' className='bg-base-100 select select-bordered w-full' 
                                    {...register("tag", {
                                        required: "Please select a tag.",
                                    })}>
                                        <option disabled value='default'>select a tag</option>
                                        <option value="React.js">React.js</option>
                                        <option value="Angular.js">Angular.js</option>
                                        <option value="Vue.js">Vue.js</option>
                                        <option value="Laravel">Laravel</option>
                                        <option value="Next.js">Next.js</option>
                                    </select>
                                </label>
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="form-control">
                                <div className="label">
                                    <p className='text-neutral my-2'>Description</p>
                                </div>
                                <textarea className="textarea textarea-bordered bg-base-100 h-24" {...register('description', {
                                    required: 'Description is required', minLength: { value: 3 }
                                })} placeholder="description"></textarea>
                            </label>
                        </div>
                        <label className="form-control w-full">
                            <div className="label">
                                <p className='text-neutral mt-2'>Pick a image (optional)</p>
                            </div>
                            <input type="file" {...register('image')} className="file-input file-input-bordered w-full" />
                        </label>
                        <div className="form-control mt-5">
                            <button className="bg-secondary font-semibold w-full py-3 text-white text-lg rounded-md">Post</button>
                        </div>
                        <div className='my-1'>
                            {errors.title && <span className='flex text-red-500'>Title must be greater than 2 letter</span>}
                            {errors.tag && <span className='flex text-red-500'>Please select a tag</span>}
                            {errors.description && <span className='flex text-red-500'>Please add a description</span>}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddPost;
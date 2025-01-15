import Gooogle from '../../../assets/Google.png'

const Google = () => {
    return (
        <div className='flex items-center justify-center '>
            <button className='bg-secondary px-6 py-3 flex items-center justify-center gap-2 text-white font-semibold w-full rounded-md'>
                <img src={Gooogle} className='w-6' alt="" />
                <span>Continue with Google</span>
            </button>
        </div>
    );
};

export default Google;
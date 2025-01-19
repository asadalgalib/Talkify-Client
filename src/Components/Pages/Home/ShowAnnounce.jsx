import useAnnounce from '../../../Custom/Hooks/useAnnounce';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const ShowAnnounce = () => {
    const [announceData] = useAnnounce();

    if (!announceData) {
        return
    }
    return (
        <div id='Announcement' className='py-5 px-5 bg-secondary rounded-md shadow center mt-5'>
            <div>
                <h1 className='text-center lg:text-3xl text-2xl font-semibold text-white'>Announcement</h1>
            </div>
            <div className='flex items-center justify-center mt-5 bg-base-100 rounded-md'>
                <Swiper
                    pagination={true}
                    modules={[Pagination]}
                    className="mySwiper">
                    {
                        announceData?.map((data,index) =>
                            <SwiperSlide
                                key={index}
                                className='lg:py-10 py-5 px-5 min-h-60 flex flex-col items-center justify-center'>
                                <div className=''>
                                    <div className='flex items-start gap-3'>
                                        <div className="avatar">
                                            <div className="rounded-full w-12">
                                                <img src={data?.photo} />
                                            </div>
                                        </div>
                                        <div className=''>
                                            <div><h1 className='font-semibold text-neutral mb-1'>{data?.name}</h1></div>
                                            <div className='text-blue-600 bg-sky-200 py-[2px] text-center text-xs font-semibold rounded-lg'>Admin</div>
                                        </div>
                                    </div>
                                </div>
                                <div className=''>
                                    <p className='text-neutral font-semibold mt-2'>{data?.title}</p>
                                    <p className='text-neutral mt-1'>{data?.description}</p>
                                </div>
                            </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default ShowAnnounce;
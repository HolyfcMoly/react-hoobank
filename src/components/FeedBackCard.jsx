import { quotes } from "../assets"

const FeedBackCard = ({content, name, img, title}) => (
    <div className='flex relative justify-between flex-col rounded-[20px] px-10 py-12 feedback-card max-w-[320px]'>
        <img src={quotes} alt="icon" className="w-[42px] h-[27px]"/>
        <p className=' font-poppins text-white leading-8 my-10'>{content}</p>
        <div className="flex items-center">
          <img src={img} alt={name} className='w-[48px] h-[48px] object-contain rounded-full'/>
            <div className="flex flex-col ml-4">
              <h2 className={`font-poppins font-semibold sm:text-[20px] text-[16px] sm:leading-8 leading-6 text-white`}>{name}</h2>
              <p className={`font-poppins font-semibold sm:text-[16px] text-[12px] leading-6 text-dimWhite`}>{title}</p>
            </div>
        </div>
    </div>
  )


export default FeedBackCard

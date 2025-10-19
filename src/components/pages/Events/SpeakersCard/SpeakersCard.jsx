import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

const SpeakersCard = ({ speakers }) => {
  const { speaker_name, company, profile_pic } = speakers.speaker;

  return (
    <div>
      <div
        data-aos="flip-right"
        className="card mb-20 w-full h-[650px] bg-base-100 shadow-xl  image-full"
      >
        <figure>
          <img className="object-cover" src={profile_pic} alt={speaker_name} />
        </figure>
        <div className="card-body">
          <h2 className="text-3xl font-bold tracking-tight mb-1">{speaker_name}</h2>
          <p className="text-lg text-blue-300 font-medium mb-4">{company}</p>
          <div className="flex justify-between items-center mt-auto">
            <p>
              <BsFillArrowRightCircleFill className="text-4xl text-rose-400 hover:text-blue-600 transition-colors duration-300" />
            </p>
            <p className="flex gap-5 text-3xl">
              <BsFacebook className="text-blue-400 hover:text-blue-300 hover:scale-110 transition-all duration-300" />
              <BsTwitter className="text-blue-400 hover:text-blue-300 hover:scale-110 transition-all duration-300" />
              <BsInstagram className="text-pink-400 hover:text-pink-300 hover:scale-110 transition-all duration-300" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakersCard;

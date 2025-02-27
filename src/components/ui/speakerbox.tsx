import React from 'react';

interface SpeakerBoxProps {
  name: string;
  title?: string;
  image?: string;
}

const SpeakerBox: React.FC<SpeakerBoxProps> = ({ name, title,image }) => {
  return (
    <div className="bg-gray-200 shadow-md border border-gray-200 h-96 max-sm:w-52 max-sm:h-72 w-72 relative rounded-md">
        <img src={image} alt={name} className='w-full h-full object-cover rounded-md'/>
        <div className='absolute bottom-2 bg-white left-1/2 -translate-x-1/2 w-[90%] rounded-full px-2 max-sm:py-[4px]'>

      <h2 className="text-lg font-semibold text-center max-sm:text-sm max-sm:leading-3">{name}</h2>
      {title && <p className="text-purple-700 text-xs text-center max-sm:text-[8px]">{title}</p>}
        </div>
    </div>
  );
};

export default SpeakerBox;
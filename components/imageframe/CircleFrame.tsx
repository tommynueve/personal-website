import Image from 'next/image';

import style from './CircleFrame.module.scss';

const CircleFrame = () => {
  return (
    <div className={style.container}>
      <Image src='/author.jpeg' alt='my picture' width='150px' height='150px'></Image>
    </div>
  );
};
export default CircleFrame;

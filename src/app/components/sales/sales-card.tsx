import Link from 'next/link';
import { ButtonsInteractive } from './buttons';
import { FullScreenButton } from './full-screen-buttons';
import ImageCardSales from './image-card-sales';


interface CardProps {
  src: string;
  title: string;
  price?: number;
  description: string;
  id: string;
  memory?: string;
  width?: string;
}

export const Card = ({
  src,
  title,
  price,
  description,
  id,
  memory,
  width = '280px',
}: CardProps) => {


  return (
    <div
      className={`md:w-[${width}] h-[470px] group flex border-borderDefault border hover:shadow rounded flex-col p-4`}
    >
      <header className='p-4 flex justify-center items-center relative'>
        <div className='md:invisible md:group-hover:visible duration-75 flex-col absolute top-0 right-0 z-10'>
          <FullScreenButton
            id={id}
            img={src}
            title={title}
            deal={{ price, memory }}
            description={description}
          />
        </div>

        <ImageCardSales
          id={id}
          img={src}
          title={title}
          deal={{ price, memory }}
          description={description}
        />


      </header>
      {/* Content */}
      <section className='flex flex-col justify-between h-full'>
        {/* Title */}
        <div className='text-xl font-medium text-titulo flex flex-col gap-3'>
          <Link href={`/device/${id}`} className='flex gap-1 hover:text-blue-500 transition'>
            {title}
          </Link>

          {/* Buttons */}
          <ButtonsInteractive
            id={id}
            title={title}
            price={price ? price : 0}
            img={src}
          />
        </div>

        {/* Price */}
        <footer className='h-4 flex justify-between items-end text-[13px] font-bold uppercase'>
          <div className='text-gris'>Accesorios</div>
          <div className='text-blue-500 border-b-2 border-borderDefault group-hover:border-blue-500'>
            {price
              ? `L. ${Math.round(price * 29).toLocaleString()}`
              : 'No definido'}
          </div>
        </footer>
      </section>
    </div>
  );
};

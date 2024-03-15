import Image from 'next/image';
import companyLogo from '@/app/_assets/company-logo.jpeg';
import profilePicture from '@/app/_assets/profile-picture.jpeg';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <section className='w-3/4 mx-auto mt-6'>
        <div className='flex gap-8 justify-center items-center'>
          <Image
            src={companyLogo}
            alt='company logo'
            className='lg:w-[10%] w-1/4 rounded-lg shadow-lg shadow-slate-500'
            priority
          />
          <h2 className='text-4xl'>GFXArtiste</h2>
        </div>
      </section>

      <section className='lg:w-3/4 px-4 lg:px-0 mx-auto mt-6'>
        <div className='flex flex-col lg:flex-row gap-8 justify-center items-center'>
          <Image
            src={profilePicture}
            alt='profile picture'
            className='lg:w-1/4 rounded-lg shadow-lg shadow-slate-500'
            priority
          />
          <div className=''>
            <h3 className='text-xl'>Mobashwerul Islam</h3>
            <p className='text-lg'>
              Phone:{' '}
              <Link
                href='tel:+8801764328959'
                className='text-blue-700 hover:underline'
              >
                +8801764-328959
              </Link>
            </p>
            <p className='text-lg'>
              Email:{' '}
              <Link
                href='mailto:contact.gfxartiste@gmail.com'
                className='text-blue-700 hover:underline'
              >
                contact.gfxartiste@gmail.com
              </Link>
            </p>
            <p>Address: HOLDING, 50. ADARSOPRA, SADAR, MAGURA-7600</p>
          </div>
        </div>
      </section>
    </main>
  );
}

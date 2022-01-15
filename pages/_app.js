import '../styles/globals.css';
import './app.css';
import Link from 'next/link';

function DuoMint({Component, pageProps}) {
  return (
    <div>
      <nav className='border-b p-6' style={{backgroundColor:'black'}}>
        <div className='flex mt-4 justify-center'>
          <Link href='/'>
            <a className='mr-4'>
              Home
            </a>
          </Link>
          <Link href='/pilot'>
            <a className='mr-6'>
              Pilot
            </a>
          </Link>
          <Link href='/passenger'>
            <a className='mr-6'>
              Passenger
            </a>
          </Link>
          <Link href='/dashboard'>
            <a className='mr-6'>
              Dashboard
            </a>
          </Link>
          <Link href='/challenges'>
            <a className='mr-6'>
              Challenges
            </a>
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}

export default DuoMint;
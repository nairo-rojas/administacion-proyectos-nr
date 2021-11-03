import type { NextPage } from 'next'
import React from 'react'
import Link  from 'next/link';


const Home: NextPage = () => {
  return (
    <div className='bg-red-500'>
      <p>Pagina de Index</p>
      <Link href='/admin/usuarios'>
      <a>Ir a Usuarios</a>
      </Link>
    </div>
  )
}

export default Home;

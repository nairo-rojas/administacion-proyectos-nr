import type { NextPage } from 'next'
import React from 'react'
import Link  from 'next/link';


const Home: NextPage = () => {
  return (
    <div className='bg-green-300'>
      <p>Pagina de Index</p>
      <div>Esta es una prueba para el branch Development</div>
      <Link href='/admin/usuarios'>
      <a>Ir a Usuarios</a>
      </Link>
    </div>
  )
}

export default Home;

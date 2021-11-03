import type { NextPage } from 'next'
import React from 'react'
import Link  from 'next/link';


const Home: NextPage = () => {
  return (
    <div className="bg-green-500">
      <head>
        <title>
          Home | Gestion de Proyectos
        </title>
      </head>
      <p>Pagina de Index</p>
      <Link href='/admin/usuarios'>
      <a>Ir a Usuarios</a>
      </Link>
      <div className='bg-green-400'>
       <i className= 'fas fa-home' />
      </div>
      </div>
  )
}

export default Home;

import Link from "next/link";
import React from "react";

const usuarios = ()=>{
    return(
        <div className='bg-blue-300'>
            <head>
                <title>Admin Usuarios | Gestion de Proyectos</title>
            </head>
            <h1>Soy la pagina de usuarios, eso es todo, tal cual</h1>
            <Link href="/">
                <a>
                    Ir a Home
                </a>
            </Link>
            
            
        </div>


    )
};

export default usuarios;
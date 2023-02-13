import React from 'react'
import Nav from '../components/layout/Nav';

export default function PageNotFound  ()  {
  return (
    <div className='PageNotFound'>
      <Nav/>
      <h1>Erreur</h1>
      <h3>La page que vous cherchez n'existe pas</h3>
    </div>
  )
}

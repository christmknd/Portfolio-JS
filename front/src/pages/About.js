import React from 'react'
import  Nav from '../components/layout/Nav';
import Chiffres from '../components/about/Chiffres';
import Experience from '../components/about/Experience';
import Competences from '../components/about/Competences';
import Parcours from '../components/about/Parcours';
import Footer from '../components/layout/Footer';

export default function About() {
  return (
    <div>
        <Nav/>
        <Parcours/>
        <Experience/>
        <Competences/>
        <Chiffres/>
        <Footer/>
    </div>
  )
}

import index from "../styles/home/index.module.css"
//componentes
import Nav from '../pages/components/Nav'
import Section1 from '../pages/components/home/Section1'
import Page from '../pages/components/home/Section2'
import Section3 from '../pages/components/home/Section3'



import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <>
    <Nav />
    <Section1 /> 

    <section id="scroll">
    <Page />
    </section>
    
    <Section3 />

    </>
  )
}
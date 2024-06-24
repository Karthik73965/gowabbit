import Navbar from "@/components/Navbar"
import Contact from "./pages/Contact"
import './App.css'
import { Route , Routes } from "react-router-dom"
import TechincalServices from "./pages/TechincalServices"
import MediaServices from './pages/MediaServices'
import BrandServices from "./pages/BrandServices"
import Fotter from "@/components/Fotter"
import About from "./pages/About"
import Blogs from "./pages/Blogs"
import {SpecificBlog} from "./pages/SpecificBlog"
import Home from './pages/Home'
type Props = {}


export default function App({ }: Props) {
  return (
    <>
      <Navbar /> 
    <Routes>
      <Route element={<Home/>} path="/"/>
      <Route element={<Contact />}  path="/contact"/>
      <Route element={<TechincalServices />}  path="/technologyservices"/>
      <Route element={<BrandServices />}  path="/brandServices"/>
      <Route element={<MediaServices />}  path="/mediaServices"/>
      <Route element={<About />}  path="/about"/>
      <Route element={<Blogs/>} path="/blogs"/>
      <Route path="/specificblog" element={<SpecificBlog/>}/>
      </Routes>/
      <Fotter/>
  </>
  )
}
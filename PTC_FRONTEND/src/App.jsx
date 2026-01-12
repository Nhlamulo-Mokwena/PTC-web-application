import { useState } from 'react'
import {
  Route,createBrowserRouter,createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import HomePage from './pages/HomePage'
import AboutUsPage from './pages/AboutUsPage'
import CoursesPage from './pages/CoursesPage'
import CourseInfoPage from './pages/CourseInfoPage'
import ApplyPage from './pages/ApplyPage'
import 'react-toastify/ReactToastify.css'
import GalleryPage from './pages/GalleryPage'
import ServicePage from './pages/ServicePage'
import BlogPage from './pages/BlogPage'
import TestimonialPage from './pages/TestimonialPage'
import EventsPage from './pages/EventsPage'
import ContactPage from './pages/ContactPage'
import PortalPage from './pages/PortalPage'
import AdminHomePage from './pages/AdminHomePage'
import AdminLayout from './layout/AdminLayout'
import AdminApplicationsPage from './pages/AdminApplicationsPage'
import AdminAddCoursePage from './pages/AdminAddCoursePage'
import { ToastContainer } from 'react-toastify'
import AdminAddBlogPage from './pages/AdminAddBlogPage'
import AdminAddTestimonialPage from './pages/AdminAddTestimonialPage'
import AdminAddEventPage from './pages/AdminAddEventPage'


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path='/about' element={<AboutUsPage/>}/>
        <Route path='/courses' element={<CoursesPage/>}/>
        <Route path='/courses/id' element={<CourseInfoPage/>}/>
        <Route path='/apply' element={<ApplyPage/>}/>
        <Route path='/gallery' element={<GalleryPage/>}/>
        <Route path='/services' element={<ServicePage/>}/>
        <Route path='/blog' element={<BlogPage/>}/>
        <Route path='/testimonials' element={<TestimonialPage/>}/>
        <Route path='/events' element={<EventsPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/portal' element={<PortalPage/>}/>
      </Route>

      <Route path='admin' element={<AdminLayout/>}>
          <Route index element={<AdminHomePage/>}/>
          <Route path=':id' element={<AdminHomePage/>}/>
          <Route path='applications/:id' element={<AdminApplicationsPage/>}/>
          <Route path='add-course/:id' element={<AdminAddCoursePage/>}/>
          <Route path='add-blog/:id' element={<AdminAddBlogPage/>}/>
          <Route path='add-testimonial/:id' element={<AdminAddTestimonialPage/>}/>
          <Route path='add-event/:id' element={<AdminAddEventPage/>}/>
      </Route>
      </>
    )
  )

  return (
    <>
      <RouterProvider router={router}/>
      <ToastContainer/>
    </>
  )
}

export default App

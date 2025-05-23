import React, { useEffect } from 'react'
import { FaUserCircle } from 'react-icons/fa'

import { useSelector } from 'react-redux'

export default function Navbar({ showModal, setShowModal, QR, setQR }) {
   const handleShowModal = () => {
      setShowModal(!showModal)
   }

   const userInfo = useSelector((state) => state.user.userInfo)
   const loggedIn = useSelector((state) => state.user.loggedIn)
   let photoUrl
   // console.log(userInfo)
   if (loggedIn) {
      photoUrl = userInfo.photo
   }

   return (
      <nav className='bg-black/20 text-white-100 p-2 sm:p-3 shadow-lg w-full rounded-md border-b border-cyan-500 lg:max-w-6xl mx-auto'>
         <div className='container mx-auto flex justify-between items-center gap-2 sm:gap-0'>
            {/* Left side: Logo and Title */}
            <div className='flex items-center justify-center gap-2'>
               <img
                  src='/logo4.png'
                  alt='Logo'
                  className='w-10 h-10 sm:w-12 sm:h-12 filter-glow'
               />
               <h1 className='text-xl sm:text-2xl lg:text-3xl bg-gradient-to-b from-cyan-400 to-cyan-600 bg-clip-text text-transparent font-bold filter-text-glow text-center sm:text-left'>
                  Hashnode Article-Finder
               </h1>
            </div>

            {/* Right side */}
            <div className='flex items-center gap-3 sm:gap-4 justify-center px-2 py-1'>
               <button onClick={handleShowModal} className='flex items-center'>
                  {loggedIn ? (
                     <img
                        src={photoUrl}
                        alt='User profile'
                        className='w-8 h-8 sm:w-10 sm:h-10 rounded-full cursor-pointer border-2 border-cyan-500'
                        onError={(e) => {
                           e.target.onerror = null
                           e.target.src = (
                              <FaUserCircle className='text-cyan-600 w-8 h-8 sm:w-10 sm:h-10 cursor-pointer border-2 border-cyan-500 rounded-full' />
                           )
                        }}
                     />
                  ) : (
                     <span className='text-cyan-300 border border-cyan-500 rounded-full w-8 h-8 sm:w-10 sm:h-10 text-xs flex items-center justify-center font-bold cursor-pointer hover:bg-cyan-900/20 transition-colors'>
                        Login
                     </span>
                  )}
               </button>

               <button
                  onClick={() => setQR(!QR)}
                  className='hover:scale-105 transition-transform'
                  aria-label='Support'
               >
                  <img
                     src='https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZnplZnJ5ZWZmc3ZlaWg2bGU5eGZ0N2JzMDVoczk3bnNqMjJ0MXd6NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/TDQOtnWgsBx99cNoyH/giphy.gif'
                     alt='Support button'
                     className='w-8 h-8 sm:w-10 sm:h-10 cursor-pointer border-2 border-cyan-500 rounded-full'
                  />
               </button>
            </div>
         </div>
      </nav>
   )
}

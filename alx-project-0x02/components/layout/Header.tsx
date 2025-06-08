import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='flex items-center justify-between p-4 bg-gray-100 shadow-md gap-4'>
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Austine
        </Link>
        <nav className="flex space-x-4">
            <ul className='flex space-x-4'>
                <li>
                    <Link href="/home" className="text-blue-600 hover:underline hover:text-red-400">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/about" className="text-blue-600 hover:underline hover:text-red-400">
                        About
                    </Link>
                </li>
                <li>
                    <Link href="/posts" className="text-blue-600 hover:underline hover:text-red-400">
                        Posts
                    </Link>
                </li>
                <li>
                    <Link href="/users" className="text-blue-600 hover:underline hover:text-red-400">
                        User
                    </Link>
                </li>
          
            </ul>
        </nav>
      
    </header>
  )
}

export default Header

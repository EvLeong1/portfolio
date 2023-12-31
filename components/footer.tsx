import React from 'react';

export default function Footer() {
    return(
        <footer className="p-5 px-4 text-center text-gray-500 dark:text-white/70">
            <small className='mb-2 text-xs'>
                &copy; 2023 - Made By Evan
            </small>
            <p className='text-xs'
            >Built with React and Next.js, TypeScript, Tailwind CSS, Framer Motion and React Email. Hosted with Vercel</p>
        </footer>
    )
}
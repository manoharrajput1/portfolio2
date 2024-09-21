'use client'
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

const Login = () => {

    const { data: session } = useSession()
    if (session && session.user) {
        return (
            <section className='flex justify-between items-center bg-cyan-200'>
                <Link href='/' className='m-2'>
                    Jhalar
                </Link>
                <div className='flex justify-between items-center gap-3'>
                    <Link href='/about'>About </Link>
                    <Link href='/contact'>Contact </Link>
                    <button onClick={() => signOut({ callbackUrl: "/" })}> Signout </button>
                </div>
            </section>

        )
    }
    return (
        <div className='flex justify-end bg-cyan-200'>
            <button className='m-2' onClick={() => signIn('google')} > Signin </button>
        </div>
    )
}

export default Login

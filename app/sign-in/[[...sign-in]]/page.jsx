import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return <div className='flex  p-10 bg-gray-50 items-center justify-center'>
     <SignIn />
  </div>
}
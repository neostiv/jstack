"use-client"

import { SignIn } from "@clerk/nextjs"

const Page = () => {
  return (
    <div className="w-full flex-1 flex items-center justify-center">
      <SignIn />
      Lorem Ipsum
    </div>
  )
}

export default Page

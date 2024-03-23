import { Admin } from '@repo/ui/admin'
import { InputBox } from '@repo/ui/input-box'
import React from 'react'

type Props = {}

const Page = (props: Props) => {
  return (
    <div>
      Page Admin
      <Admin />
      <InputBox />

    </div>
  )
}

export default Page
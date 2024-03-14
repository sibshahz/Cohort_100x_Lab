import React from 'react'

type Props = {}

const ChildLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <div className='border-b p-1 text-center'>20 % off on all products</div>
      {children}
    </div>
  )
}

export default ChildLayout
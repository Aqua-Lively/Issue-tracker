import React, { PropsWithChildren, ReactNode } from 'react'


const ErrorMessage = ({children}: PropsWithChildren) => {

  if (!children) return null;

  return (
    <div className="badge badge-error gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
      {children}
    </div>
  )
}

export default ErrorMessage

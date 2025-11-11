import React from 'react'

type HeaderType={
    Header:string
}

const SharedHeader = ({Header}:HeaderType) => {
  return (
     <div>
        <div className="bg-[#131313] flex py-20 justify-center items-center">
        <h1 className="text-white text-[35px] font-bold">{Header}</h1>
      </div >

    </div>
  )
}

export default SharedHeader
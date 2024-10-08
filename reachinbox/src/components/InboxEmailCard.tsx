import React from 'react'

type inboxProps ={
    currColor:Boolean;
    fromEmail:string;
    subject:string;
    id:number;
    handleChangeEmail:any,
    threadId:number
}

const InboxEmailCard:React.FC<inboxProps> = ({currColor, threadId, id, fromEmail, subject, handleChangeEmail}) => {
  return (
    <div className='w-full pt-3 pb-3 pl-2'>
        <div className='flex gap-1 justify-between text-[12px]'>
            <p>{fromEmail}</p>
            <p className='text-gray-400'> Mar 7</p>
        </div>
        <p className='text-xs text-gray-400'>{subject}</p>
        <div className='flex text-[10px] gap-3 mt-2'>
            <div className={`w-[65px] h-4 pr-1 flex justify-around items-center border border-gray-700 rounded-lg`}>
                <p className='w-2 h-2 rounded-3xl bg-green-600 mt-0.5'></p>
            </div>
            <div className={`w-[112px] h-4 p-1 gap-1 flex items-center border border-gray-700 rounded-lg`}>
                <p>Campaign Name</p>
            </div>
        </div>
    </div>
  )
}

export default InboxEmailCard

import React from 'react'

function IncomeItem({
    id,title,amoumt,date,category,description,deleteItem,indicatorColor,type
}) 
{
  return (
    <>
        <div className="icon">

        </div>
        <div className="content">
            <h5>{title}</h5>
            <div className="inner-content">
                <div className="text">
                    <p>45</p>
                    <p>{date}</p>
                    <p>
                       {description} 
                    </p>
                </div>
                <div className="btn-con">
                    <Button
                        className='p-4 rounded-md text-black bg-white hover:bg-black hover:text-white border-black border-4'
                        onClick = {()=>handleDelete(id)}
                    />
                </div>
            </div>
        </div>
    </>
  )
}

export default IncomeItem

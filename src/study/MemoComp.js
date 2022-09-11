import React from 'react'

function MemoComp({name}) {
    console.log("render from Memo comp")
  return (
    <div>
        {name}
    </div>
  )
}

export default React.memo(MemoComp)
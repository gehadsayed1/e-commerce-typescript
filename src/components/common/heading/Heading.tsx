import { ReactNode } from "react"


function Heading({children}:{children:ReactNode}) {
  return (
    <h2 className="mb-3" style={{fontSize:"26px"}}>{children}</h2>
  )
}

export default Heading
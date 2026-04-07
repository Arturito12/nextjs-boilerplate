import React from "react"

export default function ContentContainer({ children }) {
  return (
    <div className="mx-auto flex w-full max-w-[360px] flex-col md:max-w-[770px] xl:max-w-[1196px]">
      {children}
    </div>
  )
}

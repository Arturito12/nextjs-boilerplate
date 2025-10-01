import React from "react";

export default function ContentContainer({ children }) {
  return (
    <div className='xl:max-w-[1196px] md:max-w-[770px] max-w-[360px] w-full mx-auto flex flex-col'>
      {children}
    </div>
  );
}

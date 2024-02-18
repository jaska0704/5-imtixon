import React from 'react'
import clsx from 'clsx'

export const Buttons = ({variant, children, classname}) => {
  return (
    <div>
        <button className={clsx("py-[1.1em] flex items-center gap-2 rounded-lg font-roboto font-bold text-[16px]", {
            "bg-primary text-white": variant === "btn_primary",
            "bg-yellow text-primary" : variant === "btn_yellow",
            "border-2 bg-white border-primary text-primary": variant === "btn_white",
            "border-2 bg-slate text-primary": variant === "btn_slate",
            }, classname)}>{children}</button>
    </div>
  )
}

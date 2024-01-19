import {PropsWithChildren} from "react";

interface TPCardProps extends PropsWithChildren {
  className?: string
}


const TPCard = (props: TPCardProps) => {
  let {className} = props

  return (
    <div className={`tp-card flex flex-col rounded-lg border border-gray-200 dark:border-gray-800 shadow-xxl bg-white dark:bg-dark-600 gap-4 p-4 ${className}`}>
      {props?.children}
    </div>
  )

}

export default TPCard
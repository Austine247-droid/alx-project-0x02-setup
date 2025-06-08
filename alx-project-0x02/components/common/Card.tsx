import { type CardProps } from "@/interfaces"

const Card = ({title, content}: CardProps) => {
  return (
    <div className='flex flex-col items-center justify-center p-6 bg-white shadow-lg rounded-lg max-w-sm mx-auto'>
      <h2 className='text-xl font-semibold text-gray-800 mb-4'>{title}</h2>
        <p className='text-gray-600 mb-4'>
            {content}
        </p>
    </div>
  )
}

export default Card

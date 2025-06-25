interface CardProps {
    title: string
    image: string
}

export default function CardImage({title, image}: CardProps) {

    
  const urlImageFact = 'https://cataas.com/cat/says/'
    return (
        <div className="w-full bg-gray rounded-2xl shadow-md p-5">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h2>
            <img src={urlImageFact+image} alt="" />
        </div>
    )
}
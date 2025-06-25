interface CardProps {
    title: string
    text: string
}

export default function Card({title, text}: CardProps) {
    return (
        <div className="w-full bg-black rounded-2xl shadow-md p-5">
            <h2 className="text-2xl font-semibold text-white mb-2">{title}</h2>
            <p className="text-white text-base">
                {text}
            </p>
        </div>
    )
}
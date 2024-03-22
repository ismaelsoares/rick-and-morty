export interface CharacterProps {
    id: string;
    name: string;
    image: string;
    origin: {
        name: string;
    }
}

export const Character = ({ id, name, image, origin }: CharacterProps) => {
    return (
        <div className="m-3 text-center border-2 border-gray-200 border-solid ">
            <img
                className="w-screen mx-auto"
                id={id}
                src={image}
                alt={name}
                width={200}
            />
            <p className="text-2xl font-bold">{name}</p>
            <p className="text-xs">Origin: {origin.name}</p>
        </div>
    )
}
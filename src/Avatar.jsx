import { RxAvatar } from "react-icons/rx";

export default function Avatar({photo}) {
    return (
        <div>
            {photo ? <img src="photo.url" alt="photo.alt" /> : <RxAvatar size={50} />}
        </div>
    )
}
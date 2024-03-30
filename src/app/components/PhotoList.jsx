import PhotoCard from "./PhotoCard";


export default function PhotoList({photos}) {
  return (
    <div className="container my-4 lg:my-8">
    <div className="img-grid">
        {
            photos.length && (
                photos.map(photo => (
                    <PhotoCard key={photo.id} photo={photo} />
                ))
            )
        }
    </div>
    </div>
  )
}

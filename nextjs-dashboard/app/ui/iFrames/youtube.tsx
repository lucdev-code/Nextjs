export default function YouTube() {
  const urlVideo = 'https://www.youtube.com/embed/yB4n_K7dZV8?list=PLUofhDIg_38qm2oPOV-IRTTEKyrVBBaU7';

  return (
    <main className="flex flex-col items-center h-200 justify-start p-4 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4 mt-4">Aprende NodeJS con midudev</h1>

      <div className="w-full px-2 sm:px-4">
        <div className="aspect-video rounded-xl overflow-hidden shadow-lg w-full">
          <iframe
            src={urlVideo}
            title="YouTube video"
            className="w-full h-full"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </main>
  )
}


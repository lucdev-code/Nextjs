export default function Stripe() {

    const urlLink = 'https://www.youtube.com/embed/gOWCCkUq2nc'

     return (
    <main className="flex flex-col items-center h-200 justify-start p-4 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4 mt-4">Aprende Stripe</h1>

      <div className="w-full px-2 sm:px-4">
        <div className="aspect-video rounded-xl overflow-hidden shadow-lg w-full">
          <iframe
            src={urlLink}
            title="Informacion de Stripe para implementar"
            className="w-full h-full"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </main>
  )
}
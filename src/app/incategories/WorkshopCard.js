export default function WorkshopCard({ workshop }) {
    return (
      <div className="bg-white p-4 rounded shadow w-[18vw] text-center">
        <img src={`/images/${workshop.img}`} alt={workshop.name} className="w-full h-[150px] object-cover rounded" />
        <h2 className="text-lg font-semibold my-2">{workshop.name}</h2>
        <p className="text-gray-600"><strong>Artist:</strong> {workshop.artist}</p>
        <p className="text-black font-bold mt-1">${workshop.price}</p>
      </div>
    );
  }
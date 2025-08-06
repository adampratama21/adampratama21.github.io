export default function Card({ image, name, onViewDetails }) {
  return (
    <div className="card">
      <img
        src={image}
        className="card-img-top"
        alt={name}
      />
      <div className="card-body text-center">
        <h5 className="card-title">{name}</h5>
        <button
          className="btn btn-primary"
          onClick={onViewDetails}>
          View Details
        </button>
      </div>
    </div>
  );
}

const DashboardCard = ({ total, icon, title, difference }) => {
  return (
    <div className="card-statistics">
      <div>
        <h1>{total}</h1>
        <p>
          <span>{icon}</span>
        </p>
      </div>
      <p>{title}</p>
      <section className="change">
        <small>{icon}</small>
        <p>{difference}</p>
      </section>
    </div>
  );
};

export default DashboardCard;

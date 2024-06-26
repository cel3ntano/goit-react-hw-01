import css from "./Profile.module.css";

export default function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
  const stats = [
    { label: "Followers", value: followers },
    { label: "Views", value: views },
    { label: "Likes", value: likes },
  ];
  return (
    <div className={css.userCard}>
      <div className={css.userData}>
        <img className={css.userImage} src={image} alt='User avatar' />
        <p className={css.userName}>{name}</p>
        <p className={css.userTag}>@{tag}</p>
        <p className={css.userLocation}>{location}</p>
      </div>

      <ul className={css.userStats}>
        {stats.map(({ label, value }) => {
          return (
            <li key={label} className={css.userStatsItem}>
              <span>{label}</span>
              <span className={css.statsValue}>{value}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

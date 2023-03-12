import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  return (
    <section className={css.statistics}>
      {title !== '' ? (
        <>
          <h2 className={css.title}>{title}</h2>
          <ul className={css['stat-list']}>
            {stats.map(el => (
              <li
                key={el.id}
                className={css.item}
                style={{
                  backgroundColor: getRandomHexColor(),
                }}
              >
                <span className={css.label}>{el.label}</span>
                <span className={css.percentage}>{`${el.percentage}%`}</span>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <ul className={css['stat-list']}>
          {stats.map(el => (
            <li
              key={el.id}
              className={css.item}
              style={{
                backgroundColor: getRandomHexColor(),
              }}
            >
              <span className={css.label}>{el.label}</span>
              <span className={css.percentage}>{`${el.percentage}%`}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};

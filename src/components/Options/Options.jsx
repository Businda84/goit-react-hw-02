import css from './Options.module.css'

       export default function Options({
  totalFeedback,
  updateFeedback,
  resetFeedback,
}) {
  return (
    <div className={css.cont}>
      <button className={css.button} onClick={() => updateFeedback("good")}>
        Good
      </button>
      <button className={css.button} onClick={() => updateFeedback("neutral")}>
        Neutral
      </button>
      <button className={css.button} onClick={() => updateFeedback("bad")}>
        Bad
      </button>

      {totalFeedback > 0 && (
        <button className={css.button} onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
}


import React, { useCallback, useEffect, useState, useRef } from "react";
import classes from "./multi-range-slider.module.less";

const MultiRangeSlider = ({ min, max, onChange }) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const [minValBlur, setMinValBlur] = useState(min);
  const [maxValBlur, setMaxValBlur] = useState(max);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  // Get min and max values when their state changes
  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minValBlur, maxValBlur]);

  return (
    <div className={classes.container}>
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        onChange={(event) => {
          const value = Math.min(Number(event.target.value), maxVal - 1);
          setMinVal(value);
          minValRef.current = value;
        }}
        onBlur={(event) => setMinValBlur(event.target.value)}
        className={classes.thumb + " " + classes.thumb__left}
        style={{ zIndex: minVal > max - 100 && "5" }}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        onChange={(event) => {
          const value = Math.max(Number(event.target.value), minVal + 1);
          setMaxVal(value);
          maxValRef.current = value;
        }}
        onBlur={(event) => setMaxValBlur(event.target.value)}
        className={classes.thumb + " " + classes.thumb__right}
      />

      <div className={classes.slider}>
        <div className={classes.slider__track} />
        <div ref={range} className={classes.slider__range} />
        <div className={classes.slider__left_value}>{minVal}</div>
        <div className={classes.slider__right_value}>{maxVal}</div>
      </div>
    </div>
  );
};

export default MultiRangeSlider;

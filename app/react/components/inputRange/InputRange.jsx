import React, { useEffect, useLayoutEffect, useState } from "react";
import "./inputRange.less";

var thumbsize = 14;

function InputRange(props) {
    const min = props.min;
    const max = props.max;

    const [avg, setAvg] = useState((min + max) / 2);
    const [minVal, setMinVal] = useState(+min);
    const [maxVal, setMaxVal] = useState(+max);

    const width = 300;
    const minWidth = thumbsize + ((avg - min) / (max - min)) * (width - 2 * thumbsize);
    const minPercent = ((minVal - min) / (avg - min)) * 100;
    const maxPercent = ((maxVal - avg) / (max - avg)) * 100;

    const styles = {
        min: {
        width: minWidth,
        left: 0,
        "--minRangePercent": `${minPercent}%`
        },
        max: {
        width: thumbsize + ((max - avg) / (max - min)) * (width - 2 * thumbsize),
        left: minWidth - 2 * thumbsize,
        "--maxRangePercent": `${maxPercent}%`
        }
    };

  useLayoutEffect(() => {
    setAvg(Math.round((maxVal + minVal) / 2));
  }, [minVal, maxVal]);

  console.log(maxVal, avg, min, max, maxPercent);


    return (
        <div className="range mt-4 mb-6">
            <div
                className="min-max-slider"
                data-legendnum="2"
                data-rangemin={min}
                data-rangemax={max}
                data-thumbsize={thumbsize}
                data-rangewidth={width}
                >
                <label htmlFor="min">Minimum price</label>
                <input
                    className="min"
                    style={styles.min}
                    name="min"
                    type="range"
                    step="1"
                    min={min}
                    max={avg}
                    value={minVal}
                    onChange={({ target }) => setMinVal(Number(target.value))}
                />
                <label htmlFor="max">Maximum price</label>
                <input
                    className="max"
                    style={styles.max}
                    name="max"
                    type="range"
                    step="1"
                    min={avg}
                    max={max}
                    value={maxVal}
                    onChange={({ target }) => setMaxVal(Number(target.value))}
                />
            </div>
            <div className='flex justify-between items-center mb-3 pt-6'>
                <div className='flex justify-between items-center gap-[5px]'>
                    <p className='text-sm text-[#CDCFE5]'>от</p>
                    <div className='flex items-center h-[33px] min-w-[85px] rounded-[4px] font-secondary-bold text-bold bg-[#EAEBF8] border-solid border-[1px] border-[rgb(206,208,232,0.25)] px-3'>{minVal}</div>
                </div>
                <div className='flex justify-between items-center gap-[5px]'>
                    <p className='text-sm text-[#CDCFE5]'>до</p>
                    <div className='flex items-center h-[33px] min-w-[85px] rounded-[4px] font-secondary-bold text-bold bg-[#EAEBF8] border-solid border-[1px] border-[rgb(206,208,232,0.25)] px-3'>{maxVal}</div>
                </div>
            </div>
            <div className="flex justify-between">
                <p className='text-xs text-[#CDCFE5]'>мин. {min}</p>
                <p className='text-xs text-[#CDCFE5]'>макс. {max}</p>
            </div>
        </div>
    );
}

export default InputRange;

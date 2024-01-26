import React, { useLayoutEffect, useState } from "react";
import "./inputRange.less";

var thumbsize = 14;

const InputRange = ({ min, max, styleIcon, styleDiv}) => {
    const [avg, setAvg] = useState((min + max) / 2);
    const [minVal, setMinVal] = useState(min);
    const [maxVal, setMaxVal] = useState(max);
    
    const minFmt = min.toLocaleString('ru-RU');
    const maxFmt = max.toLocaleString('ru-RU');

    const width = 269;
    const minWidth =
        thumbsize + ((avg - min) / (max - min)) * (width - 2 * thumbsize);
    const minPercent = ((minVal - min) / (avg - min)) * 100;
    const maxPercent = ((maxVal - avg) / (max - avg)) * 100;
    // const pozitionWidth = width - (width * minPercent / 100);
    // const pozitionLeft = width * minPercent / 100;
    const styles = {
        min: {
        width: minWidth,
        left: 0,
        "--minRangePercent": `${minPercent}%`
        },
        max: {
        width: thumbsize + ((max - avg) / (max - min)) * (width - 2 * thumbsize),
        left: minWidth,
        "--maxRangePercent": `${maxPercent}%`
        },
        /* pozition: {
            width: pozitionWidth,
            left: pozitionLeft
        } */
    };

    const minValFmt = minVal.toLocaleString('ru-RU');
    const maxValFmt = maxVal.toLocaleString('ru-RU');

    useLayoutEffect(() => {
        setAvg(Math.round((maxVal + minVal) / 2));
    }, [minVal, maxVal]);

    return (
        <div className="range mt-4 mb-6 relative">
            <div className={`${styleDiv} h-[3px] absolute w-full left-0 top-0 h-[3px]`} ></div>
            <div
            className="min-max-slider"
            data-legendnum="2"
            data-rangemin={min}
            data-rangemax={max}
            data-thumbsize={thumbsize}
            data-rangewidth={width}
            >
            <label htmlFor="min"></label>
            <input
                id="min"
                className={`min ${styleIcon}`}
                style={styles.min}
                name="min"
                type="range"
                step="1"
                min={min}
                max={avg}
                value={minVal}
                onChange={({ target }) => setMinVal(Number(target.value))}
            />
            <label htmlFor="max"></label>
            <input
                id="max"
                className={`max ${styleIcon}`}
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
                    <p className='text-sm text-[#CDCFE5] font-secondary-bold'>от</p>
                    <div className='flex items-center h-[33px] min-w-[85px] rounded-[4px] font-secondary-bold text-bold bg-[#EAEBF8] border-solid border-[1px] border-[rgb(206,208,232,0.25)] text-sm px-2'>{minValFmt}</div>
                </div>
                <div className='flex justify-between items-center gap-[5px]'>
                    <p className='text-sm text-[#CDCFE5] font-secondary-bold'>до</p>
                    <div className='flex items-center h-[33px] min-w-[85px] rounded-[4px] font-secondary-bold text-bold bg-[#EAEBF8] border-solid border-[1px] border-[rgb(206,208,232,0.25)] text-sm px-2'>{maxValFmt}</div>
                </div>
            </div>
            <div className="flex justify-between">
                <p className='text-xs text-[#CDCFE5] font-secondary-med'>мин. {minFmt}</p>
                <p className='text-xs text-[#CDCFE5] font-secondary-med'>макс. {maxFmt}</p>
            </div>
        </div>
    );
};

export default InputRange;

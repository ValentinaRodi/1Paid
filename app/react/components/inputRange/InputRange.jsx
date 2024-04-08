import React, { useLayoutEffect, useState, useEffect, useRef } from "react";
import "./inputRange.less";

var thumbsize = 14;

const InputRange = ({ name, changeFormValue, min, max, styleIcon, styleDiv, reset, changeStateRangeFalse, idInput}) => {
    const [avg, setAvg] = useState((min + max) / 2);
    const [minVal, setMinVal] = useState(min);
    const [maxVal, setMaxVal] = useState(max);
    const [minValInput, setMinValInput] = useState(min);
    const [maxValInput, setMaxValInput] = useState(max);

    let minNumber = (reset === true) ? min : (minVal === '') ? 1 : minVal;
    let avgWid = (reset === true) ? ((min + max) / 2) : avg;

    const parentDiv = document.getElementById(idInput ? idInput : 'rangeWidht');

    let width = 0;
    let styles = {};

    if(parentDiv !== null) {
        width = +parentDiv.offsetWidth;
        const minWidth = thumbsize + ((avgWid- min) / (max - min)) * (width - 2 * thumbsize);
        const minPercent = (((minNumber === '') ? 1 : minNumber - min) / (avgWid - min)) * 100;
        const maxPercent = (((reset === true) ? max : maxVal - avgWid) / (max - avgWid)) * 100;
        
        styles = {
            min: {
            width: minWidth,
            left: 0,
            "--minRangePercent": `${minPercent}%`
            },
            max: {
            width: thumbsize + ((max - avgWid) / (max - min)) * (width - 2 * thumbsize),
            left: minWidth,
            "--maxRangePercent": `${maxPercent}%`
            }
        };
    };

    //Для изменения значения при перемещении ползунка
    useLayoutEffect(() => {
        if(reset === true) {
            changeStateRangeFalse();
        };
        
        if(Number(minVal) > Number(max)) {
            setMinVal(max);
        } 

        if(Number(maxVal) < Number(minVal)) {
            setMaxVal(minVal);
        }

        setAvg(Math.round((maxVal + minNumber) / 2));
        
        if(+minVal !== +min || +maxVal !== +max) {
            changeFormValue(name + '-min', minVal);
            changeFormValue(name + '-max', maxVal);
        }

    }, [minVal, maxVal]);
    
    const changeMinValue = (e) => {
        if(reset === true) {
            changeStateRangeFalse();
        };

        let { value } = e.target;
        
        let isnum = /^[0-9\s]+$/.test(value);

        if(isnum) {
            if(Math.floor(+value.replace(/\s/g, '')) > +max) {
                setMinValInput(+max);
                e.preventDefault();
            } else {
                setMinValInput(value);
            };
        };

        if(value === '')  {
            setMinValInput('');
        };
    }

    const changeMaxValue = (e) => {
        if(reset === true) {
            changeStateRangeFalse();
        };

        let { value } = e.target;
        let isnum = /^[0-9\s]+$/.test(value);
        
        if(isnum) {
            if(Math.floor(+value.replace(/\s/g, '')) > max) {
                setMaxValInput(+max);
                e.preventDefault();
            } else {
                setMaxValInput(value);
            };
        };

        if(value === '')  {
            setMaxValInput(value);
        };
    }

    const clearInputMin = (e) => {
        let { value } = e.target;
        value = '';
        setMinValInput(value);
    };

    const clearInputMax = (e) => {
        let { value } = e.target;
        value = '';
        setMaxValInput(value);
    };

    //Если пользователь вручную вводит значения min/max
    const inputMinRef = useRef();
    const inputMaxRef = useRef();

    useEffect(() => {
        
        const handleClickOutsideMin = (event) => {
            if (inputMinRef.current && !inputMinRef.current.contains(event.target)) {
                
                if(+minValInput < +min) {
                    setMinVal(+min);
                    setMinValInput(+min);
                } else {
                    setMinVal(+minValInput);
                    setMinValInput(+minValInput);
                };

                if(+minValInput > +maxVal) {
                    setMinVal(+maxVal);
                    setMinValInput(+maxVal);
                } else {
                    setMinVal(+minValInput);
                    setMinValInput(+minValInput);
                };

                if(minValInput.length === 0) {
                    setMinVal(min);
                    setMinValInput(min);
                }
            }
        };
    
        document.addEventListener("click", handleClickOutsideMin);
    
        return () => {
            document.removeEventListener("click", handleClickOutsideMin);
        };

    }, [inputMinRef, minValInput]);

    useEffect(() => {

        const handleClickOutsideMax = (event) => {
            
            if (inputMaxRef.current && !inputMaxRef.current.contains(event.target)) {
                if(+maxValInput < +minVal) {
                    setMaxVal(+minVal);
                    setMaxValInput(+minVal);
                }  else {
                    setMaxVal(+maxValInput);
                    setMaxValInput(+maxValInput);
                } 
            }
        };
    
        document.addEventListener("click", handleClickOutsideMax);
    
        return () => { 
            document.removeEventListener("click", handleClickOutsideMax);
        };

    }, [inputMaxRef, maxValInput]);

    return (
        <div>
            <h3 className="sh-title-text mb-[-8px] min-[880px]:mb-0 font-secondary-bold text-bold text-xs text-black">{name}</h3>
            <div className="range mt-0 min-[880px]:mt-4 mb-4 sm:mb-6 relative">
                <div className={`${styleDiv} h-[3px] absolute w-full left-0 top-0 h-[3px]`} ></div>
                <div
                    id='rangeWidht'
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
                        value={(reset === true) ? min : (minVal === '') ? 1 : minVal}
                        onChange={({ target }) => [setMinVal(Number(target.value)), setMinValInput(Number(target.value))]}
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
                        value={(reset === true) ? max : maxVal}
                        onChange={({ target }) => [setMaxVal(Number(target.value)), setMaxValInput(Number(target.value))]}
                    />
                </div>
                <div  className='flex justify-between items-center mb-1 sm:mb-3 pt-6'>
                    <div ref={inputMinRef} className='flex justify-between items-center gap-[5px]'>
                        <p className='text-sm text-[#A6B1C7] font-secondary-bold'>от</p>
                        <input name="minVal" type="text" value={(reset === true) ? min.toLocaleString('ru-RU') : minValInput.toLocaleString('ru-RU')} onClick={clearInputMin} onChange={changeMinValue} placeholder={min.toLocaleString('ru-RU')} className='flex items-center h-[33px] w-[85px] rounded-[4px] font-secondary-bold text-bold bg-[#EAEBF8] border-solid border-[1px] border-[rgb(206,208,232,0.25)] text-sm px-2'/>
                    </div>
                    <div ref={inputMaxRef} className='flex justify-between items-center gap-[5px]'>
                        <p className='text-sm text-[#A6B1C7] font-secondary-bold'>до</p>
                        <input name="maxVal" type="text" value={(reset === true) ? max.toLocaleString('ru-RU') : maxValInput.toLocaleString('ru-RU')} onClick={clearInputMax} onChange={changeMaxValue} placeholder={max.toLocaleString('ru-RU')} className='flex items-center h-[33px] w-[85px] rounded-[4px] font-secondary-bold text-bold bg-[#EAEBF8] border-solid border-[1px] border-[rgb(206,208,232,0.25)] text-sm px-2'/>
                    </div>
                </div>
                <div className="flex justify-between">
                    <p className='text-xs text-[#A6B1C7] font-secondary-med'>мин. {min.toLocaleString('ru-RU')}</p>
                    <p className='text-xs text-[#A6B1C7] font-secondary-med'>макс. {max.toLocaleString('ru-RU')}</p>
                </div>
            </div>
        </div>
    );
};

export default InputRange;

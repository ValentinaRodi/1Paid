import { useState, useEffect, useRef } from 'react';

function FeedbacksItemSmall(props) {
    const [seller, setSeller] = useState(true);
    const [answer, setAnswer] = useState(false);
    const [answerText, setAnswerText] = useState(false);
    const [answerVisible, setAnswerVisible] = useState(false);
    const [editText, setEditText] = useState(false);

    const [text, setText] = useState('');
    const textareaAnswer = useRef(null);
    const textareaEdit = useRef(null);
    const [textAreaHeight, setTextAreaHeight] = useState("1rem");
    const [textAnswer, setTextAnswer] = useState('');
   
    
    const [textAnswerNew, setTextAnswerNew] = useState('');
    const [editableNew, setEditableNew] = useState(false);


    //Написать ответ
    const toAnswer = () => {
        setAnswer(true);
    };

    //Показать/скрыть ответ
    const showAnswer = () => {
        (editText) ? setEditText(false) : setAnswerVisible(!answerVisible);
    };

    //Удалить ответ
    const delAnswer = () => {
        setAnswer(false);
        setAnswerText(false);
        setAnswerVisible(false);
        setText('');
    };

    //Для редактирования текста ответа
    const handleEditText = () => {
        setEditText(!editText);
    };



    const handleChange = (e) => {
        setText(e.target.value);
    };

    //Для изменения высоты textarea текста ответа
    useEffect(() => {
        if(editText === true) {
            setTextAreaHeight(`${textareaEdit.current.scrollHeight}px`);
        }
    }, [textAnswer, editText]);

    

    const handleEditNew = () => {
        setEditableNew(!editableNew);
    };

    const handleChangeNew = (e) => {
        setTextAnswerNew(e.target.value);
    };

    const showAnswerNew = () => {
        setAnswerVisible(!answerVisible);
    };


    
    
    // Для автоматического расчета высоты отзыва textarea
    const handleInputChange = (e) => {
        setText(e.target.value);
        e.target.style.height = `${e.target.scrollHeight}px`;
    };

    const submitAnswer = (e) => {
        setAnswer(false);
        if(text.length === 0) {
            e.preventDefault();
        } else {
            setAnswerText(true);
            setAnswerVisible(true);
            e.preventDefault();
        };
    };

    useEffect(() => {
        if(answerVisible && text === '') {
            document.getElementById('answer').style.height = '1rem';
        };
    }, [text]);

    

    return (
        <div className='flex flex-col gap-1 items-end min-w-[270px]'>
            <div className="fbc rounded-xl flex flex-col bg-white w-full">
                <div className="p-4 sm:p-6 flex items-start gap-4 flex-col h-full">
                    <div className="flex flex-row justify-between items-start w-full gap-3">
                        <div className="fbc-info flex-shrink-0 flex gap-3 ">
                            <div className="fbc-avatar flex-shrink-0 rounded-full w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] overflow-hidden ">
                                <img className="fbc-avatar-pic w-full h-full object-cover" src={`/img/${props.avatar}`} alt="user"/>
                            </div>
                            <div className="fbc-info-inner">
                                <div className="fbc-username font-secondary-bold text-sm sm:text-lg text-[#1D222C]  ">{props.name}</div>
                                <div className="fbc-date font-secondary-med text-[10px] sm:text-xs text-[#CDCFE5] ">{props.time}</div>
                            </div>
                        </div>
                        {props.rank ?
                            <div className="flex gap-1 items-end">
                                <div className="spf-rating-icon flex-shrink-0 w-[22px] h-[22px] [&amp;_svg]:w-full">
                                    <img src='/img/icon-spf-rating-icon.svg' alt="rating-image" />
                                </div>
                                <div className="font-secondary-bold font-bold text-black text-[13px]">{props.rank}</div>
                            </div>
                            :null
                        }
                    </div>
                    <div className="h-full border-0 sm:border-t border-solid border-[#E7EAF3] pt-0 sm:pt-5 font-secondary-med text-[10px] text-[#595E72]">{props.text}</div>
                </div>
                {answer ?
                    <div className='w-full px-3 py-2'>
                        <div className={`${text !== '' ? 'flex-col' : 'flex-row'} chat-input flex items-center gap-3 bg-white font-secondary-med p-4 border border-[#E4E9F4] rounded-xl w-full`}>
                            <textarea type="text" ref={textareaAnswer} style={{ height: textAreaHeight }} value={text} onChange={handleInputChange} id="answer" placeholder="Ответить на отзыв" className='resize-none font-secondary-med leading-[12px] text-black placeholder:text-[#BAC9E5] text-xs w-full h-5'>{textAnswer}</textarea>
                            <button onClick={submitAnswer} className="chat-input-btn flex self-end flex-shrink-0 bg-inherit flex justify-center items-center w-[w-22px] h-[20px]">
                                <img className="fbc-avatar-pic w-full h-full object-cover" src="/img/icon-send.svg" alt="send"/>
                            </button>
                        </div>
                    </div>
                    :
                    <div className='w-full h-[36px] bg-[#F9F9FC] flex justify-between items-center px-3 rounded-b-[12px]'>
                        {seller ?
                            <div className='w-full'>
                                {answerText ?
                                    <div className='w-full flex justify-between'>
                                        <diV>
                                            {answerVisible && !editText ?
                                                <div className='flex gap-x-6 flex-wrap'>
                                                    <button onClick={handleEditText} className='bg-inheri text-[#1F1F1F] font-secondary-bold text-xs'>Редактировать</button>
                                                    <button onClick={delAnswer} className='bg-inherit text-[#BC0F4D] font-secondary-bold text-xs'>Удалить</button>
                                                </div>
                                                : null
                                            }
                                        </diV>
                                        <button onClick={showAnswer} className='bg-inherit text-end font-secondary-med text-[#C5CFE4] underline text-xs'>{answerVisible ? editText ? 'Отменить' : 'Скрыть ответ' : 'Показать ответ'}</button>
                                    </div>
                                    : 
                                    <div className='w-full flex justify-end'>
                                        <button onClick={toAnswer} className='bg-inherit font-secondary-med text-[#C5CFE4] underline text-xs'>Ответить</button>
                                    </div> 
                                }
                            </div>
                            :
                            <div className='w-full flex justify-end'>
                                <button onClick={toAnswer} className='bg-inherit font-secondary-med text-[#C5CFE4] underline text-xs'>Ответить</button>
                            </div> 
                        }
                        
                    </div>
                }
                {answerVisible ?
                    <div className='flex gap-4 items-center w-full border-t border-solid border-[#DBE0ED]'>
                        <div className='w-full h-full bg-white p-3 rounded-xl flex items-start justify-between relative'>
                            <div className="fbc-avatar flex-shrink-0 rounded-full w-9 h-9 sm:w-11 sm:h-11 overflow-hidden mr-3">
                                <img className="fbc-avatar-pic w-full h-full object-cover" src={`/img/${props.avatarAnswer}`} alt="user"/>
                            </div>
                            <div className='w-full h-full flex flex-col gap-1'>
                                <div className="flex items-start justify-between w-full">
                                    <div className="font-secondary-bold font-bold text-black text-xs">{props.nameAnswer}</div>
                                    <div className='flex gap-3'>
                                        <div className="font-secondary-med text-[10px] text-[#C9D0DF]">{props.timeAnswer}</div>
                                        <button onClick={delAnswer} className='bg-inherit w-3 h-3'>
                                            <img className="fbc-avatar-pic w-full h-full object-cover" src='/img/icon-close-2.svg' alt="close"/>
                                        </button>
                                    </div>
                                </div>
                                <div className={`${editText ? 'gap-2' : 'gap-[74px]'} w-full h-full flex items-end justify-between `}>
                                    {editText ? (
                                        <textarea type="text" ref={textareaEdit} style={{ height: textAreaHeight }} value={text} onChange={handleInputChange} className='resize-none font-secondary-med leading-[12px] text-black text-[10px] w-full h-auto'>{text}</textarea>
                                    ) : (
                                        <div className="transfer-text font-secondary-med break-all leading-[12px] w-full h-[24px] text-[#A2AEC8] text-[10px]">{text}</div>
                                    )}
                                    <div className='flex items-end justify-end'>
                                        <button onClick={handleEditText} className='bg-inherit w-[18px] h-[15px]'>
                                            {editText ? 
                                                    <img className="fbc-avatar-pic w-full h-full object-cover" src='/img/icon-send.svg' alt="send"/>
                                                : <img className="fbc-avatar-pic w-full h-full object-cover" src='/img/icon-edit.svg' alt="edit"/>
                                            }
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    : null
                }
            </div> 
        </div>              
    );
};

export default FeedbacksItemSmall;
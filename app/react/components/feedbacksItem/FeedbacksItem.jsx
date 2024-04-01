import { useState, useEffect, useRef } from 'react';

function FeedbacksItem(props) {
    const [answerVisible, setAnswerVisible] = useState(false);

    const showAnswer = () => {
        setAnswerVisible(!answerVisible);
        setAnswerVisibleNew(false);
    };


    //Для изменения текста ответа
    const [textAnswer, setTextAnswer] = useState(props.answer);
    const [editable, setEditable] = useState(false);

    const handleEdit = () => {
        setEditable(!editable);
    };

    const handleChange = (e) => {
        setTextAnswer(e.target.value);
    };

    //Для изменения высоты textarea текста ответа
    const textareaRef = useRef(null);
    const [textAreaHeight, setTextAreaHeight] = useState("auto");
  
    useEffect(() => {
        if(editable === true) {
            setTextAreaHeight(`${textareaRef.current.scrollHeight}px`);
        }
    }, [textAnswer, editable]);

    //Написать ответ
    const [answerVisibleNew, setAnswerVisibleNew] = useState(false);
    const [textAnswerNew, setTextAnswerNew] = useState('');
    const [editableNew, setEditableNew] = useState(false);

    const toAnswer = () => {
        setAnswerVisibleNew(!answerVisibleNew);
        setAnswerVisible(false);
    };

    const handleEditNew = () => {
        setEditableNew(!editableNew);
    };

    const handleChangeNew = (e) => {
        setTextAnswerNew(e.target.value);
    };

    const showAnswerNew = () => {
        setAnswerVisibleNew(!answerVisibleNew);
    };

    return (
        <div className='flex flex-col gap-1 items-end'>
            <div className="fbc rounded-xl flex flex-col bg-white ">
                <div className="p-4 sm:p-6 flex items-start gap-4 flex-wrap sm:flex-nowrap h-full">
                    <div className="flex flex-row justify-between items-start w-full sm:w-auto sm:flex-col gap-3">
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
                    <div className="border-0 sm:border-l border-solid border-[#E7EAF3] pl-0 sm:pl-4 font-secondary-med text-[10px] text-[#595E72]">{props.text}</div>
                </div>
                {props.answer ?
                    <div className='w-full h-[36px] bg-[#F9F9FC] flex justify-end items-center px-2 rounded-b-[12px]'>
                        <div className='flex justify-between items-center'>
                            <button onClick={showAnswer} className='bg-inherit font-secondary-med text-[#C5CFE4] text-xs mr-[24px]'>
                                Показать ответ
                            </button>
                            <button onClick={toAnswer} className='bg-inherit font-secondary-med text-[#C5CFE4] underline text-xs mr-[10px]'>
                                Ответить
                            </button>
                            <button className='bg-inherit font-secondary-med text-[#C5CFE4] text-xs'>
                                <img className="fbc-avatar-pic w-full h-full object-cover" src="/img/icon-profile.svg" alt="icon" />
                            </button>
                        </div>
                    </div>
                    : null
                }
            </div> 
            {answerVisible ?
                <div className='flex gap-4 items-center w-full sm:w-auto sm:mr-[11.5%]'>
                    <div className='w-1.5 h-3 flex-shrink-0'>
                        <img className="fbc-avatar-pic w-full h-full object-cover" src='/img/icon-arrow-left-3.svg' alt="arrow"/>
                    </div>
                    <div className='w-auto sm:w-[496px] h-full bg-white p-3 rounded-xl flex items-start justify-between relative'>
                        <div className="fbc-avatar flex-shrink-0 rounded-full w-9 h-9 sm:w-11 sm:h-11 overflow-hidden mr-3">
                            <img className="fbc-avatar-pic w-full h-full object-cover" src={`/img/${props.avatarAnswer}`} alt="user"/>
                        </div>
                        <div className='w-full h-full flex flex-col gap-1'>
                            <div className="flex items-start justify-between w-full">
                                <div className="font-secondary-bold font-bold text-black text-xs">{props.nameAnswer}</div>
                                <div className='flex gap-3'>
                                    <div className="font-secondary-med text-[10px] text-[#C9D0DF]">{props.timeAnswer}</div>
                                    <button onClick={showAnswer} className='bg-inherit w-3 h-3'>
                                        <img className="fbc-avatar-pic w-full h-full object-cover" src='/img/icon-close-2.svg' alt="close"/>
                                    </button>
                                </div>
                            </div>
                            <div className={`${editable ? 'gap-2' : 'gap-[74px]'} w-full h-full flex items-end justify-between `}>
                                {editable ? (
                                    <textarea type="text" ref={textareaRef} style={{ height: textAreaHeight }} value={textAnswer} onChange={handleChange} className='resize-none font-secondary-med leading-[12px] text-[#A2AEC8] text-[10px] w-full h-auto'>{textAnswer}</textarea>
                                ) : (
                                    <div className="transfer-text font-secondary-med leading-[12px] w-full h-[24px] text-[#A2AEC8] text-[10px]">{textAnswer}</div>
                                )}
                                <div className='flex items-end justify-end'>
                                    <button onClick={handleEdit} className='bg-inherit w-[18px] h-[15px]'>
                                        {editable ? 
                                                <img className="fbc-avatar-pic w-full h-full object-cover" src='/img/icon-send.svg' alt="send"/>
                                            : <img className="fbc-avatar-pic w-full h-full object-cover" src='/img/icon-edit.svg' alt="edit"/>
                                        }
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='absolute triangle top-[-11px] right-[160px] sm:right-[36px]'></div>
                    </div>
                </div>
                : null
            }
            {answerVisibleNew ?
                <div className='flex gap-4 items-center w-full sm:w-auto'>
                    <div className='w-full sm:w-[496px] h-full bg-white p-3 rounded-xl flex items-start justify-between relative'>
                        <div className='w-full h-full flex flex-col gap-1'>
                            <div className='gap-2 w-full h-full flex items-end justify-between'>
                                <textarea type="text" value={textAnswerNew} onChange={handleChangeNew} className='resize-none p-2 min-h-[24px] font-secondary-med leading-[12px] border border-solid border-[#E7EAF3] rounded-lg text-[#A2AEC8] text-[10px] w-full h-auto'>{textAnswerNew}</textarea>
                                <div className='flex flex-col items-stretch justify-between h-full'>
                                    <button onClick={showAnswerNew} className='bg-inherit w-3 h-3'>
                                        <img className="fbc-avatar-pic w-full h-full object-cover" src='/img/icon-close-2.svg' alt="close"/>
                                    </button>  
                                    <button onClick={handleEditNew} className='bg-inherit w-[18px] h-[15px]'>  
                                        <img className="fbc-avatar-pic w-full h-full object-cover" src='/img/icon-send.svg' alt="send"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='absolute triangle top-[-11px] right-[50px]'></div>
                    </div>
                </div>
                : null
            }
        </div>              
    );
};

export default FeedbacksItem;
import { useState, useEffect, useRef } from 'react';
import StarRating from "../../components/starRating/StarRating";

function ModalFeedback(props) {
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

    const submitFeedback = (e) => {
        if(text.length === 0) {
            e.preventDefault();
        } else {
            props.closeModal();
            props.openModalSubmit();
        };
    };

    return (
        <div className='fixed inset-x-0 inset-y-0 flex items-start md:items-center justify-center mt-[10%] md:mt-0'>
            <div className='shadow-[0px_25px_35px_0px_#E2E3F3A6] flex flex-col gap-1 items-end w-full sm:w-[317px]'>
                <div className="fbc rounded-xl flex flex-col bg-white w-full">
                    <div className="sfb-form rounded-lg p-6 bg-white w-full">
                        <div className="sfb-form-h border-b border-solid border-[#E9EAF4] pb-0 md:pb-3 flex justify-between items-center gap-2">
                            <div className='flex justify-between items-start w-full'>
                                <div className="sfb-form-title font-secondary-bold text-base md:text-lg text-black">Оставить отзыв</div>
                                <div className='flex justify-end'>
                                    <button onClick={props.closeModal} className='p-0 bg-inherit hover:bg-[rgba(241,245,249,1)]'>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18 6L6 18M6 6L18 18" stroke="#B8B8B8" strokeWidth="1.5" strokeLinecap="round"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="sfb-btn-close flex-shrink-0 w-4 h-4 [&amp;_svg]:w-[100%] [&amp;_svg]:h-[100%] text-[#D6D9EA] cursor-pointer hidden 2md:block">
                                <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.424023 17.576C-0.0462888 17.1028 -0.0462888 16.3387 0.424023 15.8656L15.8656 0.424038C16.1621 0.0778742 16.6275 -0.0729097 17.0706 0.0336795C17.5137 0.140269 17.8597 0.486241 17.9663 0.929353C18.0729 1.37247 17.9221 1.83793 17.5759 2.13438L2.13436 17.576C1.66124 18.0463 0.897141 18.0463 0.424023 17.576Z" fill="currentColor"></path>
                                    <path d="M0.424023 0.424023C0.897141 -0.0462888 1.66124 -0.0462888 2.13436 0.424023L17.5759 15.8656C17.9221 16.1621 18.0729 16.6275 17.9663 17.0706C17.8597 17.5137 17.5137 17.8597 17.0706 17.9663C16.6275 18.0729 16.1621 17.9221 15.8656 17.5759L0.424023 2.13436C-0.0462888 1.66124 -0.0462888 0.897141 0.424023 0.424023Z" fill="currentColor"></path>
                                </svg>
                            </div>
                        </div>
                        <div className="sfb-form-b mt-3">
                            <div className="sfb-form-field">
                                <div className="sfb-form-label mb-3 font-secondary-bold text-xs text-black">Оценка продавца</div>
                                <div className='w-full h-12 border border-solid border-[#CED0E880] rounded flex items-center justify-center'>
                                    <StarRating />
                                </div>
                            </div>
                        </div>
                        <div className="sfb-form-b mt-3">
                            <div className="sfb-form-field">
                                <div className="sfb-form-label mb-3 font-secondary-bold text-xs text-black">Поделитесь впечатлением</div>
                                <textarea value={text} maxLength={240} onChange={handleInputChange} id="feedback" className="overflow-hidden h-12 sfb-form-input rounded border border-solid border-[#E3E4F4] w-full px-4 py-3.5 bg-[#EAEBF8] font-secondary-bold text-[11px] md:text-[13px] text-black resize-none duration-200 placeholder:text-[#BAC9E5]" placeholder="Напишите свой отзыв"></textarea>
                            </div>
                        </div>
                        <div className="sfb-form-f mt-4 md:mt-6">
                            <button onClick={submitFeedback} className={`${text.length === 0 ? 'bg-[#F4F3F9] flex items-center cursor-default text-[#CDCFDC]' : 'btn-primary btn text-white'} rounded w-full h-12 justify-center gap-2`}>
                                <div className="w-4 h-4 [&amp;_svg]:w-[100%] [&amp;_svg]:h-[100%]">
                                    <svg viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M14.946 0.0639801L0.626033 5.70513C0.463011 5.76996 0.318444 5.87836 0.209005 6.01788C0.0995662 6.1574 0.0297919 6.32239 0.00762682 6.49365C-0.0145383 6.66491 0.0118374 6.83553 0.0837696 6.98581C0.155702 7.13609 0.27023 7.25985 0.414115 7.34288L3.55914 9.15716C3.76185 9.27341 4.00825 9.3009 4.24415 9.23358C4.48004 9.16625 4.68607 9.00964 4.81696 8.79819C4.94785 8.58673 4.9929 8.3378 4.94212 8.10609C4.89133 7.87437 4.74888 7.67888 4.54616 7.56264L2.98031 6.64883L13.6356 2.45301L9.47492 13.0236L7.68164 9.64678L9.83744 7.49099C10.0139 7.31452 10.1178 7.08001 10.1264 6.83897C10.1349 6.59793 10.0473 6.37011 9.88289 6.2057C9.71848 6.04129 9.49074 5.95377 9.2497 5.9623C9.00866 5.97082 8.77408 6.07469 8.59761 6.25116L5.93613 8.91264C5.78164 9.05683 5.67663 9.24556 5.63802 9.44836C5.59941 9.65115 5.62944 9.8562 5.72328 10.0305L8.73194 15.7007C8.81118 15.8508 8.9339 15.9718 9.08519 16.049C9.23649 16.1263 9.40994 16.1564 9.58485 16.136C9.75976 16.1156 9.92866 16.0454 10.0712 15.9339C10.2137 15.8224 10.3238 15.6743 10.3883 15.5073L16.0295 1.18738C16.0937 1.02301 16.1111 0.846999 16.0794 0.679952C16.0478 0.512905 15.9684 0.361711 15.8508 0.244033C15.7331 0.126354 15.5819 0.0470376 15.4148 0.0153918C15.2478 -0.016254 15.0719 0.00113375 14.9075 0.0653802L14.946 0.0639801Z" fill="currentColor"></path>
                                    </svg>
                                </div>
                                <div className="btn-text font-secondary-bold text-xs">Отправить</div>
                            </button>
                        </div>
                    </div>
                </div> 
            </div>  
        </div>            
    );
};

export default ModalFeedback;
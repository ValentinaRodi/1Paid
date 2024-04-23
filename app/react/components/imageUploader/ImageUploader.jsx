import React, { useState } from 'react';

const ImageUploader = () => {
    const [images, setImages] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const handleImageChange = (event) => {
        const selectedFiles = event.target.files;
        const newImages = [...images];

        // Проверяем количество выбранных файлов
        if (selectedFiles.length > 10) {
            setErrorMessage('Максимальное количество изображений - 10');
            return;
        };

        // Проверяем файлы
        const allowedFormats = ['image/jpeg', 'image/png'];
        for (let i = 0; i < selectedFiles.length; i++) {
            const file = selectedFiles[i];

            // Проверяем размер файла (в байтах)
            if (file.size > 100 * 1024 * 1024) { // 100 MB в байтах 10 мегабайт = 10 * 1024 * 1024 байт, 10 килобайт = 10 * 1024 байт
                setErrorMessage('Максимальный размер файла - 100 МБ');
                return;
            };

            //Проверяем форматы файлов
            if (!allowedFormats.includes(file.type)) {
                setErrorMessage('Разрешены только форматы JPEG и PNG');
                return;
            };
        }

        // Очищаем ошибку, если все в порядке
        setErrorMessage('');

        // Добавляем новые изображения
        for (let i = 0; i < selectedFiles.length; i++) {
            if (newImages.length < 10) {
                newImages.push(selectedFiles[i]);
            } else {
                setErrorMessage('Максимальное количество изображений - 10');
                break;
            };
        };

        setImages(newImages);
    };

    const handleRemoveImage = (index) => {
        const newImages = [...images];
        newImages.splice(index, 1);
        setImages(newImages);

        // Очищаем ошибку, если все в порядке
        setErrorMessage('');
    };

    return (
        <div>
            <div className='flex gap-2 items-end mb-1'>
                <label htmlFor="file-upload" className="cursor-pointer">
                    <img className='w-5' src='/img/icons8-skrepka.png' alt="picture"/>               
                </label>
                <input
                    id="file-upload"
                    type="file"
                    accept="image/jpeg,image/png"
                    onChange={handleImageChange}
                    multiple
                    className='hidden'
                />
                <div className='text-xs font-secondary-bold text-black'>Прикрепить изображение</div>
            </div>
            {errorMessage ?
                <p className='text-xs font-secondary-med text-[#FF5343]'>{errorMessage}</p>
                : null
            }
            <div className='flex flex-col gap-1 mb-1'>
                {images.map((image, index) => (
                <div key={index} className='flex gap-4'>
                    <p className='text-xs font-secondary-med text-black'>{image.name}</p>
                    <button onClick={() => handleRemoveImage(index)}>
                        <img className='w-3' src="/img/icon-del-card.svg" alt="icon close"/>
                    </button>
                </div>
                ))}
            </div>
            <p className='mt-1 text-[10px] font-secondary-med text-[#b9bbd0]'>До 10 изображений, не более 100 Mb. JPG, PNG </p>
        </div>
    );
};

export default ImageUploader;

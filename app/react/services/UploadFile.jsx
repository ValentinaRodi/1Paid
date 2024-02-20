import fetchFunc from './fetch';
import Dropzone from "react-dropzone";
import {useState, useEffect} from 'react';
import mime from 'mime/lite';


function UploadFunc(props) {
    const [file, setFile] = useState('');
    const [errorFile, setErrorFile] = useState('hidden');
    const [errorFileType, setErrorFileType] = useState('hidden');


    const save = (file) => {
        file = file[0];
        console.log(file);
        setErrorFile('hidden');
        setErrorFileType('hidden');

        if (validateType(file.path, 'image/')) {
            console.log('TYPE-IMG')
            let myData = new FormData();
            myData.append('img_file', file);

            console.log(myData);

            //файл загружен успешно, отправка на серв gif
            console.log(myData.getAll('img_file'));

            fetchFunc(props.url, 'POST', myData, 'img')
                .then((data) => {
                    console.log('res:', data);

                })
                .catch((error) => {
                    console.log('ERRR:', error);

                })
        } else {
            setErrorFileType(' ');
            console.log('error-NOT-IMG');
        }

    }

    const validateType = (file, mimeType) => {
        // img => 'image/'
        let fileType = mime.getType(file);
        return fileType.startsWith(mimeType);
    }

    return (
        <Dropzone onDrop={acceptedFiles => save(acceptedFiles)}>
            {({getRootProps, getInputProps}) => (
                <section>
                    <div {...getRootProps()}>
                        <div
                            className="bg-black/40 cursor-pointer border-solid border-1  flex flex-auto justify-center  rounded-3xl">
                                    <span className=" m-[30px] flex flex-auto justify-center">
                                        Нажмите, или перетащите файл для загрузки
                                    </span>
                        </div>

                        <input {...getInputProps()} name="img_file"/>

                    </div>
                    <div>
                        <span
                            className={`typeError ${errorFileType}  text-[14px] text-red-600 flex flex-auto justify-center`}>
                            Файл не является изображением.
                        </span>
                        <span className={`serverError ${errorFile}  text-[14px] text-red-600`}>
                            Ошибка загрузки файла на сервер.
                        </span>
                    </div>
                </section>
            )}
        </Dropzone>
    );
}

export default UploadFunc;
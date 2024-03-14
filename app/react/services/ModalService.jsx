import Upload from "../components/upload/Upload";

function openModal(modalEl) {
        console.log('Upload_mod');
        const body = document.querySelector('body');
        body.style.overflow = 'hidden';
        setModalEl(modalEl);

        setModalOpen(true);
}

function closeModal() {

}
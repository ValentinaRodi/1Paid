import { useState, useEffect } from 'react';
import uuid from 'react-uuid';
import { Link } from 'react-router-dom';


function Pagination() {

    return (
        <div className="pag mt-6 flex justify-center items-center gap-2 ">
            <Link className="pag-arrow mr-4 " href="#">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 6L9.70711 11.2929C9.31658 11.6834 9.31658 12.3166 9.70711 12.7071L15 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
                </svg>
            </Link>
            <Link className="pag-item" href="#">1</Link>
            <Link className="pag-item" href="#">2</Link>
            <Link className="pag-item" href="#">3</Link>
            <Link className="pag-item _active" href="#">443</Link>
            <Link className="pag-arrow ml-4 " href="#">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 6L14.2929 11.2929C14.6834 11.6834 14.6834 12.3166 14.2929 12.7071L9 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
                </svg>
            </Link>
        </div>
    )
}

export default Pagination;

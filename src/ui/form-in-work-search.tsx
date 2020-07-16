import React from 'react';

function FormInWorkSearch(props: any) {
    return (
        <form className="in-work-search">
            <div className="form-group" aria-label="Search">
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                    <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                </svg>

                <span
                    aria-label="Clear"
                    title="очистить"
                    onClick={() => console.warn("Очистить поиск")}
                >&times;</span>
                
                <input
                    className="form-control form-control-sm"
                    type="text"
                    placeholder="Поиск"
                    aria-label="Search"
                />
            </div>
        </form>
    );
};

export default FormInWorkSearch;

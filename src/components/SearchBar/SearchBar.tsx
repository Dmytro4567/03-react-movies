import css from './SearchBar.module.css'
import {type FormEvent, useState} from "react";
import toast from "react-hot-toast";

interface SearchBarProps {
    onSubmit: (value: string) => void;
}

function SearchBar({onSubmit}: SearchBarProps) {
    const [value, setValue] = useState('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (value.trim() === '') {
            toast.error('Please enter your search query.');
            return;
        }

        onSubmit(value);
        setValue('');
    };
    return (
        <div className={css.header}>
            <div className={css.container}>
                <a className={css.link} href="https://www.themoviedb.org/">Powered by TMDB</a>
                <form className={css.form} onSubmit={handleSubmit}>
                    <input className={css.input} type="text" onChange={(e) => setValue(e.target.value)}/>
                    <button className={css.button}>Search</button>
                </form>
            </div>
        </div>
    )
}

export default SearchBar
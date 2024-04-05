import { useId } from 'react';
import css from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {changeFilter, selectNameFilter} from '../../redux/filtersSlice';

export default function SearchBox () {
        const elementId = useId();
        const dispatch = useDispatch();
        const value = useSelector(selectNameFilter);

        return (
            <div className={css.searchContainer}>
                <label className={css.text}
                htmlFor={elementId}>
                    Find contacts by name
                </label>
                <input className={css.input}
                    type='text'
                    id={elementId}
                    value={value}
                    onChange={(e) => dispatch(changeFilter(e.target.value))}
                />
            </div>

        );
    }
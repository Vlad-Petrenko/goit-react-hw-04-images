import { useState } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './Searchbar.module.css';

export const Searchbar = ({ onSubmit }) => {
  const [imgName, setImgName] = useState('');

  const handleNameChange = event => {
    setImgName(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (imgName === '') {
      return toast.warn('Enter something, please');
    }

    onSubmit(imgName);
  };

  return (
    <header className={styles.searchbar}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <ToastContainer />
        <button type="submit" className={styles.button}>
          <span className={styles.buttonLabel}></span>
        </button>
        <input
          onChange={handleNameChange}
          className={styles.input}
          value={imgName}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

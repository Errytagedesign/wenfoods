import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import styles from './ChatUs.module.scss';
import Link from 'next/link';
function ChatUs() {
  return (
    <div className={styles.chatus}>
      <Link href='https://wa.me/+2348095342136'>
        <h4 className='d-flex flex-column align-items-center'>
          <span>
            {' '}
            <BsWhatsapp size={30} />
          </span>{' '}
          <span>Chat us to ORDER</span>
        </h4>
      </Link>
    </div>
  );
}

export default ChatUs;

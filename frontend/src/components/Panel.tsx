import React from 'react';
import Button from '../ui/Button';

interface PanelProps {
    className?: string;
  }

const Panel: React.FC<PanelProps> = ({ className = '' }) => {
    return (
      <aside className={`panel ${className || ''}`}>
        <h2 className={'h2 heading header-font panel__title'}>Generate Awesome Web Pages</h2>
        <h5 className={'h5 heading lead panel__description'}>
          The most important part of the Startup is the samples. 
          The samples form a set of 25 usable pages you can use as is 
          or you can add new blocks.
        </h5>
        <Button text='Learn More' backgroundColor='act-third' className='buttons middle panel__button'/>
      </aside>
    );
  };
  
export default Panel;
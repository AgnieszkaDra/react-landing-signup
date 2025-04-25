import React from 'react';
import Title from '../typography/Typography';
import Button from '../ui/Button';

interface PanelProps {
    className?: string;
  }

const Panel: React.FC<PanelProps> = ({ className = '' }) => {
    return (
      <aside className={`panel ${className || ''}`}>
        <Title kind="h2" text="Generate Awesome Web Pages" className="panel__title" />
        <Title 
            kind="p" 
            text="The most important part of the Startup is the samples. The samples form a set 
            of 25 usable pages you can use as is or you can add new blocks" 
            className="panel__description" 
        />
        <Button text='Learn More' backgroundColor='act-third' className='panel__button'/>
      </aside>
    );
  };
  
export default Panel;
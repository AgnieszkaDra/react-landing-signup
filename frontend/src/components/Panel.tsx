import React from 'react';
import Button from '../ui/Button';
import Typography from '../typography/Typography';

interface PanelProps {
    className?: string;
  }

const Panel: React.FC<PanelProps> = ({ className = '' }) => {
    return (
      <aside className={`panel ${className || ''}`}>
        <Typography kind="h2" className="panel__title">
          Generate Awesome Web Pages
        </Typography>
        <Typography kind="p" className="panel__description">
          The most important part of the Startup is the samples. 
          The samples form a set of 25 usable pages you can use as is 
          or you can add new blocks.
        </Typography>
        <Button text='Learn More' backgroundColor='act-third' className='panel__button'/>
      </aside>
    );
  };
  
export default Panel;
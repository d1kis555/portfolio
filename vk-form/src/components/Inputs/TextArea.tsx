import React from 'react';
import Textarea from '@mui/joy/Textarea';

interface TexAreaInterface {
  setParametrs(type: string, value: number | string): void;
  title: string;
  typeData: string;
  valueData: string;
}

const TextArea: React.FC<TexAreaInterface> = ({setParametrs, title, typeData, valueData}) => {
  return (
    <div className="textarea-block">
      <p className="title-item">{title}</p>
      <Textarea
        variant="plain"
        minRows={2}
        placeholder="Ваш комментарий..."
        size="md"
        // variant="plain"
        color="neutral"
        value={valueData}
        onChange={event => {
          setParametrs(typeData, event.target.value as string);
        }}
      />
    </div>
  );
};

export default TextArea;

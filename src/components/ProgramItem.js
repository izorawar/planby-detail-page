import {
  ProgramBox,
  ProgramContent,
  ProgramFlex,
  ProgramStack,
  ProgramTitle,
  ProgramText,
  ProgramImage,
  useProgram
} from "planby";
import { DetailPage } from "./DetailPage";
import React, { useState } from 'react';

export const ProgramItem = ({ program, ...rest }) => {
  const {
    styles,
    isLive,
    isMinWidth
  } = useProgram({
    program,
    ...rest
  });

  const { data } = program;
  const { image, title, since, till } = data;

  const formatTimeCustom = (time) => {
    const date = new Date(time);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours %= 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return `${hours.toString().padStart(2, '0')}:${minutes}`;
  };

  const sinceTime = formatTimeCustom(since);
  const tillTime = formatTimeCustom(till);
  const [open, setOpen] = useState(false);

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <ProgramBox width={styles.width} style={styles.position} onClick={() => setOpen(true)}>
      {open && (
        <div onClick={handleModalClick}>
          <DetailPage
            data={data}
            sinceTime={sinceTime}
            show={open}
            onClose={() => {
              setOpen(false);
            }}
            tillTime={tillTime}
          />
        </div>
      )}
      <ProgramContent width={styles.width} isLive={isLive}>
        <ProgramFlex>
          {isLive && isMinWidth && <ProgramImage src={image} alt="Preview" />}
          <ProgramStack>
            <ProgramTitle>{title}</ProgramTitle>
            <ProgramText>
              {sinceTime} - {tillTime}
            </ProgramText>
          </ProgramStack>
        </ProgramFlex>
      </ProgramContent>
    </ProgramBox>
  );
};

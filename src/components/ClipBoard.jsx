import ClipboardJS from 'clipboard';
import PropTypes from 'prop-types';
import React, { memo, useEffect, useRef } from 'react';

const ClipBoard = ({url}) => {
  const btnRef = useRef();

  useEffect(() => {
    const { current: target } = btnRef;
    const clipboard = new ClipboardJS(target);
    clipboard.on('success', () => {
      target.classList.add('on');
      target.textContent = "Copied!";
    });

    clipboard.on('error', function (e) {
      console.error('Action:', e.action);
      console.error('Trigger:', e.trigger);
    });
  })

  return (
    <div className="cont-copy">
      <input type="url" id="copy-url" value={url || ''} placeholder="Shorten URL" readOnly />
      <button ref={btnRef} data-clipboard-target="#copy-url">Copy</button>
    </div>
  );
};

ClipBoard.propTypes = {
  url: PropTypes.string
};

export default memo(ClipBoard);
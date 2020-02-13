import React, { useState } from 'react';
import { Modal} from './Modal';

export const Buttons = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setModalOpen(true)}>
        Exibir modal
      </button>
      <button onClick={() => setModalOpen(false)}>
        Remover modal
      </button>
      { modalOpen && <Modal /> }
    </div>
  );
}

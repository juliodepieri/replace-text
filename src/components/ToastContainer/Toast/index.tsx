import { useEffect } from 'react';
import {
  FiAlertCircle,
  FiCheckCircle,
  FiInfo,
  FiXCircle,
} from 'react-icons/fi';

import { Container } from './styles';

export interface ToastMessage {
  id: string;
  type: 'success' | 'error' | 'info';
  title: string;
  description?: string;
}

interface ToastProps {
  message: ToastMessage;
  style: object;
  onRemoveToast: (id: string) => void;
}

const icons = {
  info: <FiInfo size={24} />,
  error: <FiAlertCircle size={24} />,
  success: <FiCheckCircle size={24} />,
};

const Toast = ({ message, style, onRemoveToast }: ToastProps) => {
  useEffect(() => {
    if (message.type === 'error') {
      return;
    }

    const timeMs = message.type === 'success' ? 5000 : 10000;
    const timer = setTimeout(() => {
      onRemoveToast(message.id);
    }, timeMs);

    return () => {
      clearTimeout(timer);
    };
  }, [onRemoveToast, message.id, message.type]);

  return (
    <Container
      $type={message.type}
      $hasDescription={!!message?.description}
      style={style}
    >
      {icons[message.type || 'info']}

      <div>
        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
      </div>

      <button type="button" onClick={() => onRemoveToast(message.id)}>
        <FiXCircle size={18} />
      </button>
    </Container>
  );
};

export default Toast;

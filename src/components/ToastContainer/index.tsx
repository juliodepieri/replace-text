import { useTransition } from 'react-spring';

import _ from 'lodash';

import { Container } from './styles';
import Toast, { ToastMessage } from './Toast';

interface ToastContainerProps {
  messages: ToastMessage[];
  onRemoveToast: (id: string) => void;
}

const ToastContainer = ({ messages, onRemoveToast }: ToastContainerProps) => {
  const messagesWithTransitions = useTransition(messages, {
    keys: _.map(messages, 'id'),
    from: { right: '-120%', opacity: 0 },
    enter: { right: '0%', opacity: 1 },
    leave: { right: '-120%', opacity: 0 },
  });

  return (
    <Container>
      {messagesWithTransitions((styles, item) => (
        <Toast
          key={item.id}
          style={styles}
          message={item}
          onRemoveToast={onRemoveToast}
        />
      ))}
    </Container>
  );
};

export default ToastContainer;

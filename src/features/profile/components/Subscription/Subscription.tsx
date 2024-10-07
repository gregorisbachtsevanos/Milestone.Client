import { FC } from "react";
import Panel from "../Panel";

interface SubscriptionProps {
  isOpen: boolean;
  handleModal: () => void;
}

const Subscription: FC<SubscriptionProps> = ({ isOpen, handleModal }) => {
  return (
    <Panel title="My Subscription" isOpen={isOpen} onClose={handleModal}>
      Manage your Subscription
    </Panel>
  );
};

export default Subscription;

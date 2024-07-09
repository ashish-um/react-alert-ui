import { useState, useEffect } from "react";
import "./errors.css";
import Button from "../magnetic/Button";

function Slide() {
  type Alert = {
    id: number;
    message: string;
    alertType: string;
  };

  const [alerts, setAlerts] = useState<Alert[] | null>(null);

  const addAlert = () => {
    const id = new Date().getTime();
    setAlerts((prevAlerts) => [
      ...(prevAlerts || []),
      {
        id,
        message: "This is an alert!",
        alertType: ["success", "error", "warning"][
          Math.round(Math.random() * 2)
        ],
      },
    ]);
  };

  const removeAlert = (id: number) => {
    setAlerts((prevAlerts) =>
      (prevAlerts || []).filter((alert) => alert.id !== id)
    );
  };

  return (
    <div>
      <Button addAlert={addAlert}>Slide</Button>
      <div className="error-parent">
        {alerts?.map((alert) => (
          <Alert
            key={alert.id}
            id={alert.id}
            message={alert.message}
            removeAlert={removeAlert}
            AlertType={alert.alertType}
          />
        ))}
      </div>
    </div>
  );
}

interface Props {
  message: string;
  id: number;
  removeAlert: (id: number) => void;
  AlertType: string;
}

const Alert = ({ message, id, removeAlert, AlertType }: Props) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      removeAlert(id);
    }, 3500); // Alert will be removed after 3.1 seconds

    return () => clearTimeout(timer);
  }, [id, removeAlert]);

  if (AlertType === "error") {
    return (
      <div className={`basic ${AlertType} slide`}>
        <span className="material-symbols-rounded">error</span>
        <p>Critical problem, mainframe is leaking!</p>
      </div>
    );
  }
  if (AlertType === "warning") {
    return (
      <div className={`basic ${AlertType} slide`}>
        <span className="material-symbols-rounded">warning</span>
        <p>Warning: Mainframe is having trouble</p>
      </div>
    );
  }
  if (AlertType === "success") {
    return (
      <div className={`basic ${AlertType} slide`}>
        <span className="material-symbols-rounded">check</span>
        <p>Mainframe is safe and secure</p>
      </div>
    );
  }
};

export default Slide;

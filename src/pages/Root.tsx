import { useEffect, useState } from "react";
import { Outlet } from 'react-router-dom';

export const Root = () => {
  const [amount, setAmount] = useState(7819.44);

  useEffect(() => {
    if ('Notification' in window) {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          console.log('Permiso para mostrar notificaciones concedido');
        }
      });
    }
  }, []);

  return (
    <main className="fixed w-full z-10 flex justify-center" style={{ height: `${window.innerHeight}px` }}>
      <div className="h-full overflow-auto bg-image flex flex-col w-full md:w-[430px]">
        <header className="h-16 bg-white flex rounded-lg border border-neutral-300 items-center justify-between mx-4 my-2">
          <img src="images/minilogo.png" alt="logo" className="h-[50px] w-[62px]" />

          <div className="bg-red-600 w-32 h-10 rounded-lg mr-4 flex justify-center items-center">
            <span className="text-white font-bold text-lg">$ {amount}</span>
          </div>
        </header>

        <div className="flex flex-col gap-5 h-full overflow-auto px-4 py-2">
          <Outlet context={[amount, setAmount]} />
        </div>
      </div>
    </main>
  );
};

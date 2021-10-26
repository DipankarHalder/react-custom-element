import { useState } from 'react';
import { Button } from '../../share';

export function HomePage() {
  const [aps, setAps] = useState(false);

  const handlePrp = () => {
    setAps(true);
    setTimeout(() => setAps(false), 3000);
  }

  return (
    <div>
      <Button
        // buttonDisabled={true}
        buttonSpinning={aps}
        buttonClick={() => handlePrp()}
      />
    </div>
  )
}

import React, { useState, useEffect } from 'react';
import LanguageSelector from './LanguageSelector';
import { Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LanguagePopupController = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const hasShown = localStorage.getItem('languagePopupShown');
    if (!hasShown) {
      setOpen(true);
      localStorage.setItem('languagePopupShown', 'true');
    }
  }, []);

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        variant="ghost"
        className="flex items-center gap-2"
      >
        <Languages className="h-5 w-5" />
        Language
      </Button>

      <LanguageSelector
        open={open}
        onOpenChange={setOpen}
      />
    </>
  );
};

export default LanguagePopupController;

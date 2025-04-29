import { useEffect, RefObject } from 'react';

export function useInputValidation(
  inputRef: RefObject<HTMLInputElement>,
  validate: (value: string) => { valid: boolean; message: string },
  onValid: () => void,
  onInvalid: (message: string) => void
) {
  useEffect(() => {
    const input = inputRef.current;
    if (!input) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        const value = input.value;
        const result = validate(value);

        if (result.valid) {
          onValid();
        } else {
          onInvalid(result.message);
        }
      }
    };

    input.addEventListener('keydown', handleKeyDown);
    return () => {
      input.removeEventListener('keydown', handleKeyDown);
    };
  }, [inputRef, validate, onValid, onInvalid]);
}
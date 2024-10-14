import { ChangeEvent, FormEvent, useEffect, useState } from "react";

export const useForm = <T extends Record<keyof T, any> = {}>({ initialData, onSubmit, validations }: UseFormOptions<T>) => {
  const [data, setData] = useState<T>({} as T);
  const [errors, setErrors] = useState<ErrorRecord<T>>({});
  const [submittedOnce, setSubmittedOnce] = useState(false);
  const [isLoadingOnSubmit, setIsLoadingOnSubmit] = useState(false);

  useEffect(() => {
    setData(initialData as T);
  }, []);

  const handleChangeText = (key: keyof T, value: string) => {
    setData(prevData => ({
      ...prevData,
      [key]: value,
    }));

    if (submittedOnce) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [key]: undefined,
      }));
    }
  };

  const validateField = (key: keyof T, value: string) => {
    const validation = validations?.[key];
    if (!validation) return true;

    if (validation.required && !value) return validation.required;

    if (validation.minLength && value.length < (validation.minLength.value as number)) {
      return validation.minLength.message;
    }

    if (validation.maxLength && value.length > (validation.maxLength.value as number)) {
      return validation.maxLength.message;
    }

    if (validation.min && parseInt(value) < (validation.min.value as number)) {
      return validation.min.message;
    }

    if (validation.max && parseInt(value) > (validation.max.value as number)) {
      return validation.max.message;
    }

    if (validation.pattern?.value && !RegExp(validation.pattern.value as RegExp).test(value)) {
      return validation.pattern.message;
    }

    if (validation.minTime) {
      const inputDate = new Date(value);
      const currentDatePlusDuration = new Date(Date.now() + (validation.minTime.value as number) * 60 * 1000);

      if (inputDate < currentDatePlusDuration) {
        return validation.minTime.message;
      }
    }

    return true;
  };

  const handleSubmit = async () => {
    setSubmittedOnce(true);
    if (validations) {
      let valid = true;
      const newErrors: ErrorRecord<T> = {};

      for (const key in validations) {
        const value: string = data[key];
        const error = validateField(key, value);
        if (error !== true) {
          valid = false;
          newErrors[key] = error;
        }
      }

      if (!valid) {
        setErrors(newErrors);
        return;
      }
    }
    setErrors({});

    setIsLoadingOnSubmit(true);
    setTimeout(() => {
      setIsLoadingOnSubmit(false);
      onSubmit();
    }, 1000);
  };

  return {
    data,
    handleChangeText,
    handleSubmit,
    errors,
    setData,
    isLoadingOnSubmit,
  };
};

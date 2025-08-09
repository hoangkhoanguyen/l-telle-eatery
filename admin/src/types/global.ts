export interface FormFieldProps<T> {
  label?: string;
  value?: T;
  onChange?(value: any): void;
  error?: {
    message?: string;
  };
}

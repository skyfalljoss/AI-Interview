
import { FormControl, FormLabel, FormItem, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { Control, Controller, FieldValues, Path } from 'react-hook-form'

interface FormFieldProps<T extends FieldValues>{
    control: Control<T>;
    name: Path<T>;
    label: string;
    placeholder?:string;
    type?:'text' | 'email' | 'file' |'password';
}

const FormField = <T extends FieldValues>({control, name, label, placeholder, type="text"}:FormFieldProps<T>) => {
  return (
    <Controller 
    control = {control} 
    name={name} 
    render = {({field})=>(
        <FormItem>
        <FormLabel>{label}</FormLabel>
        <FormControl>
            <Input 
            className="input" 
            placeholder={placeholder} 
            type={type}
            {...field} />
        </FormControl>
        <FormMessage />
        </FormItem>
    )}
    ></Controller>
  )
}

export default FormField


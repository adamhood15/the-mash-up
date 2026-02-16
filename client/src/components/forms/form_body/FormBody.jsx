import FormField from './components/FormField'

export default function FormBody (
    { 
        fields = [],
        values = {}, 
        onChange 
    }) {
  return (
    <div className='space-y-4'>
      {fields.map(field => (
        <FormField
          key={field.name}
          name={field.name}
          label={field.label}
          type={field.type || 'text'}
          placeholder={field.placeholder || ''}
          value={values[field.name] || ''}
          onChange={onChange}
        />
      ))}
    </div>
  )
}

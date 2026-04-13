import * as z from 'zod'
import { useForm } from '@tanstack/react-form'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '#/components/ui/card'
import { Field, FieldContent, FieldDescription, FieldError, FieldGroup, FieldLabel, FieldSet, FieldTitle } from '#/components/ui/field'
import { Input } from '#/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '#/components/ui/select'
import { RadioGroup, RadioGroupItem } from '#/components/ui/radio-group'
import { Textarea } from '#/components/ui/textarea'
import { cn } from '#/lib/utils'

const brands = ['Apple', 'Samsung', 'Xiaomi', 'Motorola', 'Realme', 'Outra'] as const

const booleanOptions = [
  { label: 'Sim', value: 'true' },
  { label: 'Não', value: 'false' }
]

const formSchema = z.object({
  name: z.string().min(3, 'O nome deve ter pelo menos 3 caracteres'),
  email: z.optional(z.string().email('O email deve ser válido')),
  phone: z.string().min(11, 'O telefone deve ter pelo menos 11 caracteres'),
  brand: z.enum(brands),
  mode: z.string().min(2, 'O modelo do celular deve ter pelo menos 2 caracteres.'),
  problemType: z.enum(['Tela quebrada', 'Não liga', 'Não carrega', 'Outro']),
  problemDescription: z.string().min(20, 'A descrição deve ter pelo menos 20 caracteres')
})

export function RequestForm() {
  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      brand: '',
      model: '',
      hasLiquidDamage: 'false',
      hasFallen: 'false',
      problemType: '',
      problemDescription: '',
    },
  })

  return (
    <Card>
      <CardHeader>
        <CardTitle>Requisição de orçamento</CardTitle>
        <CardDescription>Campos com indicados * são obrigatórios</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={(e) => {
          e.preventDefault()
          form.handleSubmit()
        }}
        >
          <FieldGroup>
            <form.Field name="name" children={(field) => {
              const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid
              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor={field.name} className='flex items-center gap-1'>
                    Nome
                    <span className='text-destructive'>*</span>
                  </FieldLabel>
                  <Input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    aria-invalid={isInvalid}
                    placeholder='João Silva'
                    autoComplete='off'
                    className='placeholder:opacity-40'
                  />
                  {
                    isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                </Field>
              )
            }}
            />
            <form.Field name="phone" children={(field) => {
              const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid
              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor={field.name} className='flex items-center gap-1'>
                    Celular
                    <span className='text-destructive'>*</span>
                  </FieldLabel>
                  <Input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    aria-invalid={isInvalid}
                    placeholder='81 9999-0000'
                    autoComplete='tel'
                    type='tel'
                    className='placeholder:opacity-40'
                  />
                  {
                    isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                </Field>
              )
            }}
            />
            <form.Field name="email" children={(field) => {
              const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid
              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor={field.name} className='flex items-center gap-1'>
                    Email <span className='text-primary opacity-60'>(opcional)</span>
                  </FieldLabel>
                  <Input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    aria-invalid={isInvalid}
                    placeholder='joaosilva@dominio.com'
                    className='placeholder:opacity-40'
                  />
                  <FieldDescription className='text-primary opacity-60'>Use email para identificar facilmente sua requisição posteriormente.</FieldDescription>
                  {
                    isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                </Field>
              )
            }}
            />
            <form.Field name="brand" children={(field) => {
              const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid
              return (
                <Field data-invalid={isInvalid}>
                  <FieldContent>
                    <FieldLabel htmlFor={field.name} className='flex items-center gap-1'>
                      Marca
                      <span className='text-destructive'>*</span>
                    </FieldLabel>
                    <Select
                      name={field.name}
                      value={field.state.value}
                      onValueChange={field.handleChange}
                    >
                      <SelectTrigger
                        id='form-tanstack-select-brand'
                        aria-invalid={isInvalid}
                        className='w-full'
                      >
                        <SelectValue placeholder='Selecione a marca' />
                      </SelectTrigger>
                      <SelectContent position='item-aligned'>
                        {
                          brands.map((brand) => (
                            <SelectItem key={brand} value={brand.toLocaleLowerCase()}>{brand}</SelectItem>
                          ))
                        }
                      </SelectContent>
                    </Select>
                  </FieldContent>
                  {
                    isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                </Field>
              )
            }}
            />
            <form.Field name="model" children={(field) => {
              const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid
              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor={field.name} className='flex items-center gap-1'>
                    Modelo
                    <span className='text-primary opacity-40'>(opcional)</span>
                  </FieldLabel>
                  <Input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    aria-invalid={isInvalid}
                    placeholder='Galaxy A17 5G'
                    autoComplete='off'
                    className='placeholder:opacity-40'
                  />
                  <FieldDescription className='text-primary opacity-60'>Informar o modelo ajuda a obter um orçamento mais rápido e preciso, deixe em branco se não souber.</FieldDescription>
                  {
                    isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                </Field>
              )
            }}
            />
            <form.Field name="hasFallen" children={(field) => {
              const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid
              return (
                <FieldSet>
                  <FieldLabel className='flex items-center gap-1'>
                    O aparelho já sofreu queda? <span className='text-destructive'>*</span>
                  </FieldLabel>
                  <RadioGroup
                    name={field.name}
                    value={field.state.value}
                    onValueChange={field.handleChange}
                    className='flex'
                  >
                    {booleanOptions.map((option) => (
                      <FieldLabel key={option.value} htmlFor={`hasFallen-${option.value}`}>
                        <Field orientation="horizontal" data-invalid={isInvalid}>
                          <FieldContent>
                            <FieldTitle>{option.label}</FieldTitle>
                          </FieldContent>
                          <RadioGroupItem
                            value={option.value}
                            id={`hasFallen-${option.value}`}
                            aria-invalid={isInvalid}
                          />
                        </Field>
                      </FieldLabel>
                    ))}
                  </RadioGroup>
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </FieldSet>
              )
            }}
            />
            <form.Field name="hasLiquidDamage" children={(field) => {
              const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid
              return (
                <FieldSet>
                  <FieldLabel className='flex items-center gap-1'>
                    O aparelho já teve contato com líquido? <span className='text-destructive'>*</span>
                  </FieldLabel>
                  <RadioGroup
                    name={field.name}
                    value={field.state.value}
                    onValueChange={field.handleChange}
                    className='flex'
                  >
                    {booleanOptions.map((option) => (
                      <FieldLabel key={option.value} htmlFor={`hasLiquid-${option.value}`}>
                        <Field orientation="horizontal" data-invalid={isInvalid}>
                          <FieldContent>
                            <FieldTitle>{option.label}</FieldTitle>
                          </FieldContent>
                          <RadioGroupItem
                            value={option.value}
                            id={`hasLiquid-${option.value}`}
                            aria-invalid={isInvalid}
                          />
                        </Field>
                      </FieldLabel>
                    ))}
                  </RadioGroup>
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </FieldSet>
              )
            }}
            />
            <form.Field
              name="problemType"
              children={(field) => {
                const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid

                return (
                  <Field>
                    <FieldLabel className="flex items-center gap-1">
                      Selecione o tipo de problema
                      <span className="text-destructive">*</span>
                    </FieldLabel>

                    <RadioGroup
                      value={field.state.value}
                      onValueChange={field.handleChange}
                      className="grid grid-cols-2 gap-2"
                    >
                      {[
                        { label: "Tela quebrada", value: "broke-screen" },
                        { label: "Não liga", value: "wont-turn-on" },
                        { label: "Aparelho lento", value: "slow-device" },
                        { label: "Outro", value: "other-problem" },
                      ].map((item) => {
                        const checked = field.state.value === item.value

                        return (
                          <label key={item.value}>
                            <Field
                              orientation="horizontal"
                              data-invalid={isInvalid}
                              className={cn(
                                "cursor-pointer rounded-md border p-3 transition-colors",
                                checked
                                  ? "bg-primary text-primary-foreground border-primary"
                                  : "hover:bg-muted"
                              )}
                            >
                              <FieldContent>
                                <FieldTitle>{item.label}</FieldTitle>
                              </FieldContent>

                              <RadioGroupItem
                                value={item.value}
                                className="sr-only"
                              />
                            </Field>
                          </label>
                        )
                      })}
                    </RadioGroup>

                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                )
              }}
            />
            <form.Field
              name="problemDescription"
              children={(field) => {
                const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor="form-tanstack-textarea-problem-description">
                      Descreva o problema
                    </FieldLabel>
                    <Textarea
                      id="form-tanstack-textarea-problem-description"
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid}
                      placeholder="Após sofrer uma queda, o celular parou de funcionar, porém sem danos físicos aparentes."
                      className="min-h-[120px] placeholder:opacity-60"
                    />
                    <FieldDescription>
                      Descreva o problema de forma breve, incluindo os principais detalhes (ex: o que aconteceu e quando começou).
                    </FieldDescription>
                    {isInvalid && <FieldError errors={field.state.meta.errors} />}
                  </Field>
                )
              }}
            />
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}
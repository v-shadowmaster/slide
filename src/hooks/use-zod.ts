import { UseMutateFunction } from "@tanstack/react-query";
import { useForm, FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

function useZodForm<T extends z.ZodType<any, any, any>>(
    schema: T,
    mutation: UseMutateFunction<any, any, z.infer<T>, any>,
    defaultValues?: Partial<z.infer<T>>
) {
    const { register, formState: { errors }, handleSubmit, watch, reset } = useForm<z.infer<T>>({
        resolver: zodResolver(schema as any),
        defaultValues: defaultValues as any,
    });

    const onFormSubmit = handleSubmit(async (values) => {
        mutation(values as any);
    });

    return { register, errors, onFormSubmit, watch, reset };
}

export default useZodForm;
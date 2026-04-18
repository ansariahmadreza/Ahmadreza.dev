import { z } from "zod";/// تعریف قوانین اعتبار سنجی فرم

export const userSchema = z.object({/// تعریف یک ابجکت از z که دارای مقادیر و قوانین زیر است
    email: z.string().email("Email is Not Valid"),
})

export type RegisterFormData = z.infer<typeof userSchema> /// ساخت یک تایپ اختصاصی که بر اساس قوانین ابجکتی که در بالا با درنظر گرفتن قوانین zod ساختیم